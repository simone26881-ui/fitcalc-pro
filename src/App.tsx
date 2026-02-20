import React, { useState, useEffect } from 'react';
import { CalculatorForm, UserData } from './components/CalculatorForm';
import { ResultsSummary } from './components/ResultsSummary';
import { FoodTracker, ConsumedFood } from './components/FoodTracker';
import { ProgressView } from './components/ProgressView';
import { WeightTracker, WeightEntry } from './components/WeightTracker';
import { Activity, Utensils, Scale } from 'lucide-react';

function App() {
  // Load initial state from localStorage if available
  const [userData, setUserData] = useState<UserData>(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : {
      age: 30,
      weight: 70,
      height: 175,
      gender: 'male',
      activityLevel: 1.375,
      fatLossGrams: 0
    };
  });

  const [consumedFoods, setConsumedFoods] = useState<ConsumedFood[]>(() => {
    const saved = localStorage.getItem('consumedFoods');
    return saved ? JSON.parse(saved) : [];
  });

  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>(() => {
    const saved = localStorage.getItem('weightHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist state
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('consumedFoods', JSON.stringify(consumedFoods));
  }, [consumedFoods]);

  useEffect(() => {
    localStorage.setItem('weightHistory', JSON.stringify(weightHistory));
  }, [weightHistory]);

  const handleAddFood = (food: ConsumedFood) => {
    setConsumedFoods(prev => [food, ...prev]);
  };

  const handleRemoveFood = (instanceId: string) => {
    setConsumedFoods(prev => prev.filter(f => f.instanceId !== instanceId));
  };

  const handleAddWeight = (weight: number, date: string) => {
    const newEntry: WeightEntry = {
      id: crypto.randomUUID(),
      weight,
      date
    };
    setWeightHistory(prev => [...prev, newEntry]);
    
    // Also update current weight if the date is today or newer than current data
    // For simplicity, we just update the current weight in the calculator form
    setUserData(prev => ({ ...prev, weight }));
  };

  const handleRemoveWeight = (id: string) => {
    setWeightHistory(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              FitCalc <span className="text-indigo-600">Pro</span>
            </h1>
          </div>
          <div className="text-sm text-slate-500 hidden sm:block">
            Calcolo BMR & Macro Tracker
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Section: Calculator & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <CalculatorForm userData={userData} onChange={setUserData} />
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

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} FitCalc Pro. Database alimenti italiani incluso.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
