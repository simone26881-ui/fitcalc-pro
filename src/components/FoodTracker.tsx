import React, { useState, useMemo } from 'react';
import { Card, Input, Button, Label } from './ui';
import { italianFoods, Food } from '../data/foods';
import { Search, Plus, Trash2 } from 'lucide-react';
import { cn } from './ui';

export interface ConsumedFood extends Food {
  consumedAmount: number; // grams
  instanceId: string; // unique id for list rendering
}

interface FoodTrackerProps {
  onAddFood: (food: ConsumedFood) => void;
  consumedFoods: ConsumedFood[];
  onRemoveFood: (instanceId: string) => void;
}

export const FoodTracker: React.FC<FoodTrackerProps> = ({ onAddFood, consumedFoods, onRemoveFood }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [amount, setAmount] = useState<string>('100');

  const filteredFoods = useMemo(() => {
    if (!searchTerm) return [];
    return italianFoods
      .filter(f => f.nome.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5); // Limit results
  }, [searchTerm]);

  const handleAdd = () => {
    if (selectedFood && amount) {
      onAddFood({
        ...selectedFood,
        consumedAmount: Number(amount),
        instanceId: crypto.randomUUID()
      });
      setSelectedFood(null);
      setSearchTerm('');
      setAmount('100');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Search Section */}
      <Card className="lg:col-span-1 flex flex-col h-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 p-1.5 rounded-lg text-sm">3</span>
          Aggiungi Alimento
        </h2>
        
        <div className="space-y-4 flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cerca alimento (es. Pasta, Pollo)..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedFood(null);
              }}
              className="pl-9"
            />
            
            {/* Dropdown Results */}
            {filteredFoods.length > 0 && !selectedFood && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 max-h-60 overflow-auto">
                {filteredFoods.map(food => (
                  <button
                    key={food.id}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                    onClick={() => {
                      setSelectedFood(food);
                      setSearchTerm(food.nome);
                    }}
                  >
                    <div className="font-medium text-gray-900">{food.nome}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      <span className="font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded mr-2">{food.categoria}</span>
                      {food.kcal} kcal / 100g • P: {food.proteine}g • G: {food.grassi}g • C: {food.carboidrati}g
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedFood && (
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="font-medium text-indigo-900 mb-1">{selectedFood.nome}</div>
              <div className="text-xs text-indigo-600 mb-4">
                Valori per 100g: {selectedFood.kcal} kcal
              </div>
              
              <Label>Quantità (g)</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  className="bg-white"
                />
                <Button onClick={handleAdd} className="shrink-0">
                  <Plus className="w-4 h-4 mr-1" /> Aggiungi
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* List Section */}
      <Card className="lg:col-span-2 flex flex-col h-full min-h-[400px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Diario Alimentare</h2>
          <span className="text-sm text-gray-500">{consumedFoods.length} alimenti</span>
        </div>

        <div className="flex-1 overflow-auto -mx-6 px-6">
          {consumedFoods.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl m-1">
              <Search className="w-8 h-8 mb-2 opacity-50" />
              <p>Nessun alimento aggiunto oggi</p>
            </div>
          ) : (
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Alimento</th>
                  <th className="px-4 py-3 text-right">Qtà</th>
                  <th className="px-4 py-3 text-right">Kcal</th>
                  <th className="px-4 py-3 text-right hidden sm:table-cell">P</th>
                  <th className="px-4 py-3 text-right hidden sm:table-cell">G</th>
                  <th className="px-4 py-3 text-right hidden sm:table-cell">C</th>
                  <th className="px-4 py-3 rounded-r-lg w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {consumedFoods.map((item) => {
                  const ratio = item.consumedAmount / 100;
                  return (
                    <tr key={item.instanceId} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{item.nome}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{item.consumedAmount}g</td>
                      <td className="px-4 py-3 text-right font-medium">{Math.round(item.kcal * ratio)}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden sm:table-cell">{Math.round(item.proteine * ratio)}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden sm:table-cell">{Math.round(item.grassi * ratio)}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden sm:table-cell">{Math.round(item.carboidrati * ratio)}</td>
                      <td className="px-4 py-3 text-right">
                        <button 
                          onClick={() => onRemoveFood(item.instanceId)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
};
