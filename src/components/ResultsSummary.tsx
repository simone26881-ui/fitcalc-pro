import React from 'react';
import { Card } from './ui';
import { UserData } from './CalculatorForm';

interface ResultsSummaryProps {
  userData: UserData;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({ userData }) => {
  // BMR Calculation (Mifflin-St Jeor)
  const calculateBMR = () => {
    if (!userData.weight || !userData.height || !userData.age) return 0;
    
    let bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age;
    if (userData.gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    return Math.round(bmr);
  };

  const bmr = calculateBMR();
  const tdee = Math.round(bmr * userData.activityLevel);
  const deficit = userData.fatLossGrams * 9;
  const targetCalories = Math.max(1200, tdee - deficit); // Safety floor of 1200 kcal

  // Macro split (45% P, 35% F, 20% C)
  const proteinGrams = Math.round((targetCalories * 0.45) / 4);
  const fatGrams = Math.round((targetCalories * 0.35) / 9);
  const carbsGrams = Math.round((targetCalories * 0.20) / 4);

  return (
    <Card className="h-full bg-slate-900 text-white border-slate-800">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
        <span className="bg-indigo-500 text-white p-1.5 rounded-lg text-sm">2</span>
        Il tuo Piano
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1">BMR Basale</div>
            <div className="text-2xl font-bold">{bmr} <span className="text-sm font-normal text-slate-500">kcal</span></div>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1">TDEE (Mantenimento)</div>
            <div className="text-2xl font-bold">{tdee} <span className="text-sm font-normal text-slate-500">kcal</span></div>
          </div>
        </div>

        <div className="bg-indigo-600 p-5 rounded-xl shadow-lg shadow-indigo-900/20">
          <div className="flex justify-between items-start mb-2">
            <div className="text-indigo-100 text-sm font-medium">Obiettivo Giornaliero</div>
            <div className="bg-indigo-500 px-2 py-0.5 rounded text-xs text-white font-medium">
              -{deficit} kcal
            </div>
          </div>
          <div className="text-4xl font-bold tracking-tight">
            {targetCalories}
            <span className="text-lg font-normal text-indigo-200 ml-1">kcal</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">Macronutrienti Target</h3>
          <div className="space-y-3">
            <MacroRow label="Proteine (45%)" value={proteinGrams} color="bg-emerald-500" />
            <MacroRow label="Grassi (35%)" value={fatGrams} color="bg-amber-500" />
            <MacroRow label="Carboidrati (20%)" value={carbsGrams} color="bg-blue-500" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const MacroRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-slate-300 text-sm">{label}</span>
    </div>
    <div className="font-mono font-medium text-lg">
      {value}<span className="text-slate-500 text-sm ml-0.5">g</span>
    </div>
  </div>
);
