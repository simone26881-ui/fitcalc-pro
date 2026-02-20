export const api = {
  getHeaders: () => {
    const userId = localStorage.getItem('userId');
    return {
      'Content-Type': 'application/json',
      'x-user-id': userId || ''
    };
  },

  async login(username, password) {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  },

  async register(username, password) {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async getUserData() {
    const res = await fetch('/api/user', { headers: this.getHeaders() });
    if (!res.ok) return null;
    return res.json();
  },

  async updateUserData(data) {
    await fetch('/api/user', {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
  },

  async getDiary() {
    const res = await fetch('/api/diary', { headers: this.getHeaders() });
    return res.json();
  },

  async addFood(food) {
    await fetch('/api/diary', {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(food)
    });
  },

  async removeFood(id) {
    await fetch(`/api/diary/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
  },

  async getWeightHistory() {
    const res = await fetch('/api/weight', { headers: this.getHeaders() });
    return res.json();
  },

  async addWeight(entry) {
    await fetch('/api/weight', {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(entry)
    });
  },

  async removeWeight(id) {
    await fetch(`/api/weight/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
  }
};
