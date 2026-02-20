import React from 'react';
import { Card } from './ui';
import { UserData } from './CalculatorForm';
import { ConsumedFood } from './FoodTracker';
import { cn } from './ui';

interface ProgressViewProps {
  userData: UserData;
  consumedFoods: ConsumedFood[];
}

export const ProgressView: React.FC<ProgressViewProps> = ({ userData, consumedFoods }) => {
  // 1. Calculate Targets
  const calculateTargets = () => {
    if (!userData.weight || !userData.height || !userData.age) return { calories: 0, protein: 0, fat: 0, carbs: 0 };
    
    let bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age;
    if (userData.gender === 'male') bmr += 5;
    else bmr -= 161;

    const tdee = bmr * userData.activityLevel;
    const deficit = userData.fatLossGrams * 9;
    const targetCalories = Math.max(1200, tdee - deficit);

    return {
      calories: Math.round(targetCalories),
      protein: Math.round((targetCalories * 0.45) / 4),
      fat: Math.round((targetCalories * 0.35) / 9),
      carbs: Math.round((targetCalories * 0.20) / 4),
    };
  };

  const targets = calculateTargets();

  // 2. Calculate Consumed
  const consumed = consumedFoods.reduce((acc, item) => {
    const ratio = item.consumedAmount / 100;
    return {
      calories: acc.calories + (item.kcal * ratio),
      protein: acc.protein + (item.proteine * ratio),
      fat: acc.fat + (item.grassi * ratio),
      carbs: acc.carbs + (item.carboidrati * ratio),
    };
  }, { calories: 0, protein: 0, fat: 0, carbs: 0 });

  // 3. Render Progress Bar
  const renderProgressBar = (label: string, current: number, target: number, colorClass: string) => {
    const percentage = Math.min(100, Math.max(0, (current / target) * 100));
    const isOver = current > target;
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-end mb-1">
          <span className="text-sm font-medium text-slate-300">{label}</span>
          <div className="text-sm">
            <span className={cn("font-bold", isOver ? "text-red-400" : "text-white")}>
              {Math.round(current)}
            </span>
            <span className="text-slate-500 mx-1">/</span>
            <span className="text-slate-400">{target}g</span>
          </div>
        </div>
        <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full transition-all duration-500", colorClass, isOver && "bg-red-500")} 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <Card className="h-full">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="bg-indigo-500/20 text-indigo-400 p-1.5 rounded-lg text-sm">4</span>
        Progresso Giornaliero
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calories Circle or Big Bar */}
        <div className="flex flex-col justify-center items-center p-6 bg-slate-800 rounded-xl border border-slate-700">
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-2">Calorie Assunte</div>
          <div className="text-5xl font-bold text-white mb-1">
            {Math.round(consumed.calories)}
          </div>
          <div className="text-sm text-slate-400 mb-4">
            su {targets.calories} kcal
          </div>
          
          {/* Calorie Progress Bar */}
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
             <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  consumed.calories > targets.calories ? "bg-red-500" : "bg-indigo-500"
                )}
                style={{ width: `${Math.min(100, (consumed.calories / targets.calories) * 100)}%` }}
             />
          </div>
          <div className="mt-2 text-xs text-slate-400">
            {Math.round(targets.calories - consumed.calories)} kcal rimanenti
          </div>
        </div>

        {/* Macros Bars */}
        <div className="flex flex-col justify-center">
          {renderProgressBar("Proteine", consumed.protein, targets.protein, "bg-emerald-500")}
          {renderProgressBar("Grassi", consumed.fat, targets.fat, "bg-amber-500")}
          {renderProgressBar("Carboidrati", consumed.carbs, targets.carbs, "bg-blue-500")}
        </div>
      </div>
    </Card>
  );
};
