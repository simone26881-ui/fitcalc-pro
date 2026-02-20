import express from "express";
import { createServer as createViteServer } from "vite";
import * as db from "./db";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  
  // Auth
  app.post("/api/register", (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) return res.status(400).json({ error: "Missing fields" });
      const userId = db.createUser(username, password);
      res.json({ userId });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const userId = db.verifyUser(username, password);
    if (userId) {
      res.json({ userId });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Middleware to check auth (simple userId in header for this demo)
  const requireAuth = (req, res, next) => {
    const userId = req.headers['x-user-id'];
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    req.userId = Number(userId);
    next();
  };

  // User Data
  app.get("/api/user", requireAuth, (req, res) => {
    const data = db.getUserData(req.userId);
    res.json(data || {});
  });

  app.post("/api/user", requireAuth, (req, res) => {
    db.updateUserData(req.userId, req.body);
    res.json({ success: true });
  });

  // Consumed Foods
  app.get("/api/diary", requireAuth, (req, res) => {
    const foods = db.getConsumedFoods(req.userId);
    res.json(foods);
  });

  app.post("/api/diary", requireAuth, (req, res) => {
    db.addConsumedFood(req.userId, req.body);
    res.json({ success: true });
  });

  app.delete("/api/diary/:id", requireAuth, (req, res) => {
    db.removeConsumedFood(req.userId, req.params.id);
    res.json({ success: true });
  });

  // Weight History
  app.get("/api/weight", requireAuth, (req, res) => {
    const history = db.getWeightHistory(req.userId);
    res.json(history);
  });

  app.post("/api/weight", requireAuth, (req, res) => {
    db.addWeightEntry(req.userId, req.body);
    res.json({ success: true });
  });

  app.delete("/api/weight/:id", requireAuth, (req, res) => {
    db.removeWeightEntry(req.userId, req.params.id);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving would go here
    // app.use(express.static('dist'));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
