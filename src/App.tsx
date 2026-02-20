import React, { useState, useEffect } from 'react';
import { CalculatorForm, UserData } from './components/CalculatorForm';
import { ResultsSummary } from './components/ResultsSummary';
import { FoodTracker, ConsumedFood } from './components/FoodTracker';
import { ProgressView } from './components/ProgressView';
import { WeightTracker, WeightEntry } from './components/WeightTracker';
import { Login } from './components/Login';
import { Activity, LogOut } from 'lucide-react';
import { api } from './api';

function App() {
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<UserData>({
    age: 30,
    weight: 70,
    height: 175,
    gender: 'male',
    activityLevel: 1.375,
    fatLossGrams: 0
  });

  const [consumedFoods, setConsumedFoods] = useState<ConsumedFood[]>([]);
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>([]);

  // Load data when userId changes
  useEffect(() => {
    if (userId) {
      setLoading(true);
      Promise.all([
        api.getUserData(),
        api.getDiary(),
        api.getWeightHistory()
      ]).then(([user, diary, weight]) => {
        if (user && Object.keys(user).length > 0) {
          // Map DB fields back to UserData interface if needed (DB uses snake_case sometimes, but we sent camelCase)
          // Actually we sent camelCase in api.updateUserData, but let's check db.ts
          // db.ts maps: age, weight, height, gender, activity_level, fat_loss_grams
          // We need to map back to camelCase for frontend
          setUserData({
            age: user.age,
            weight: user.weight,
            height: user.height,
            gender: user.gender as 'male' | 'female',
            activityLevel: user.activity_level,
            fatLossGrams: user.fat_loss_grams
          });
        }
        setConsumedFoods(diary || []);
        setWeightHistory(weight || []);
      }).finally(() => setLoading(false));
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserId(null);
    setConsumedFoods([]);
    setWeightHistory([]);
  };

  const handleUpdateUserData = (data: UserData) => {
    setUserData(data);
    api.updateUserData(data);
  };

  const handleAddFood = (food: ConsumedFood) => {
    const newFood = { ...food };
    setConsumedFoods(prev => [newFood, ...prev]);
    api.addFood(newFood);
  };

  const handleRemoveFood = (instanceId: string) => {
    setConsumedFoods(prev => prev.filter(f => f.instanceId !== instanceId));
    api.removeFood(instanceId);
  };

  const handleAddWeight = (weight: number, date: string) => {
    const newEntry: WeightEntry = {
      id: crypto.randomUUID(),
      weight,
      date
    };
    setWeightHistory(prev => [...prev, newEntry]);
    api.addWeight(newEntry);
    
    // Update current weight
    const newData = { ...userData, weight };
    setUserData(newData);
    api.updateUserData(newData);
  };

  const handleRemoveWeight = (id: string) => {
    setWeightHistory(prev => prev.filter(e => e.id !== id));
    api.removeWeight(id);
  };

  if (!userId) {
    return <Login onLogin={setUserId} />;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">Caricamento dati...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              FitCalc <span className="text-indigo-500">Pro</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400 hidden sm:block">
              Sincronizzato
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Esci"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Section: Calculator & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <CalculatorForm userData={userData} onChange={handleUpdateUserData} />
          </div>
          <div className="lg:col-span-5">
            <ResultsSummary userData={userData} />
          </div>
        </div>

        {/* Weight Tracker Section */}
        <div className="w-full">
          <WeightTracker 
            history={weightHistory} 
            onAddEntry={handleAddWeight} 
            onRemoveEntry={handleRemoveWeight} 
          />
        </div>

        {/* Middle Section: Progress */}
        <div className="w-full">
          <ProgressView userData={userData} consumedFoods={consumedFoods} />
        </div>

        {/* Bottom Section: Food Tracker */}
        <div className="w-full">
          <FoodTracker 
            onAddFood={handleAddFood} 
            consumedFoods={consumedFoods} 
            onRemoveFood={handleRemoveFood}
          />
        </div>

      </main>

      <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} FitCalc Pro. Database alimenti italiani incluso.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
