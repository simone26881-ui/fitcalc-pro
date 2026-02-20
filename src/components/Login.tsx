import React, { useState } from 'react';
import { Card, Input, Button, Label } from './ui';
import { api } from '../api';
import { User } from 'lucide-react';

interface LoginProps {
  onLogin: (userId: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let res;
      if (isRegistering) {
        res = await api.register(username, password);
      } else {
        res = await api.login(username, password);
      }
      
      localStorage.setItem('userId', res.userId);
      onLogin(res.userId);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-500/20 p-3 rounded-full mb-3">
            <User className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {isRegistering ? 'Crea Account' : 'Accedi'}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Sincronizza i tuoi dati su tutti i dispositivi
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Username</Label>
            <Input 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 p-2 rounded border border-red-500/20">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Caricamento...' : (isRegistering ? 'Registrati' : 'Accedi')}
          </Button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
            >
              {isRegistering 
                ? 'Hai già un account? Accedi' 
                : 'Non hai un account? Registrati'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};
