import Database from 'better-sqlite3';
import crypto from 'crypto';

const db = new Database('app.db');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS user_data (
    user_id INTEGER PRIMARY KEY,
    age INTEGER,
    weight REAL,
    height REAL,
    gender TEXT,
    activity_level REAL,
    fat_loss_grams REAL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS consumed_foods (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    food_json TEXT NOT NULL,
    date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS weight_history (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    weight REAL NOT NULL,
    date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export const createUser = (username, password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  try {
    const info = stmt.run(username, `${salt}:${hash}`);
    return info.lastInsertRowid;
  } catch (e) {
    if (e.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw new Error('Username already exists');
    }
    throw e;
  }
};

export const verifyUser = (username, password) => {
  const stmt = db.prepare('SELECT id, password FROM users WHERE username = ?');
  const user = stmt.get(username);
  if (!user) return null;

  const [salt, hash] = user.password.split(':');
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  
  if (hash === verifyHash) return user.id;
  return null;
};

export const getUserData = (userId) => {
  const stmt = db.prepare('SELECT * FROM user_data WHERE user_id = ?');
  return stmt.get(userId);
};

export const updateUserData = (userId, data) => {
  const stmt = db.prepare(`
    INSERT INTO user_data (user_id, age, weight, height, gender, activity_level, fat_loss_grams)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      age = excluded.age,
      weight = excluded.weight,
      height = excluded.height,
      gender = excluded.gender,
      activity_level = excluded.activity_level,
      fat_loss_grams = excluded.fat_loss_grams
  `);
  stmt.run(userId, data.age, data.weight, data.height, data.gender, data.activityLevel, data.fatLossGrams);
};

export const getConsumedFoods = (userId) => {
  const stmt = db.prepare('SELECT * FROM consumed_foods WHERE user_id = ?');
  return stmt.all(userId).map(row => ({
    ...JSON.parse(row.food_json),
    instanceId: row.id
  }));
};

export const addConsumedFood = (userId, food) => {
  const stmt = db.prepare('INSERT INTO consumed_foods (id, user_id, food_json, date) VALUES (?, ?, ?, ?)');
  const { instanceId, ...foodData } = food;
  stmt.run(instanceId, userId, JSON.stringify(foodData), new Date().toISOString());
};

export const removeConsumedFood = (userId, instanceId) => {
  const stmt = db.prepare('DELETE FROM consumed_foods WHERE id = ? AND user_id = ?');
  stmt.run(instanceId, userId);
};

export const getWeightHistory = (userId) => {
  const stmt = db.prepare('SELECT * FROM weight_history WHERE user_id = ?');
  return stmt.all(userId);
};

export const addWeightEntry = (userId, entry) => {
  const stmt = db.prepare('INSERT INTO weight_history (id, user_id, weight, date) VALUES (?, ?, ?, ?)');
  stmt.run(entry.id, userId, entry.weight, entry.date);
};

export const removeWeightEntry = (userId, entryId) => {
  const stmt = db.prepare('DELETE FROM weight_history WHERE id = ? AND user_id = ?');
  stmt.run(entryId, userId);
};
