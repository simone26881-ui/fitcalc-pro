import React, { useState } from 'react';
import { Card, Button, Input, Label } from './ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
import { Trash2, Plus } from 'lucide-react';

export interface WeightEntry {
  id: string;
  date: string; // ISO string YYYY-MM-DD
  weight: number;
}

interface WeightTrackerProps {
  history: WeightEntry[];
  onAddEntry: (weight: number, date: string) => void;
  onRemoveEntry: (id: string) => void;
}

export const WeightTracker: React.FC<WeightTrackerProps> = ({ history, onAddEntry, onRemoveEntry }) => {
  const [weight, setWeight] = useState<string>('');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const handleAdd = () => {
    if (weight && date) {
      onAddEntry(Number(weight), date);
      setWeight('');
    }
  };

  // Sort history by date for the chart
  const sortedHistory = [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Calculate min/max for Y-axis domain to make the chart look better
  const weights = history.map(h => h.weight);
  const minWeight = weights.length > 0 ? Math.min(...weights) - 2 : 0;
  const maxWeight = weights.length > 0 ? Math.max(...weights) + 2 : 100;

  return (
    <Card className="h-full">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="bg-indigo-500/20 text-indigo-400 p-1.5 rounded-lg text-sm">5</span>
        Andamento Peso
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <h3 className="font-medium text-white mb-3">Registra Peso</h3>
            <div className="space-y-3">
              <div>
                <Label>Data</Label>
                <Input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                />
              </div>
              <div>
                <Label>Peso (kg)</Label>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    placeholder="Es. 70.5"
                    step="0.1"
                  />
                  <Button onClick={handleAdd} disabled={!weight || !date}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[300px] overflow-auto">
            <h3 className="font-medium text-white mb-2 text-sm">Storico</h3>
            {sortedHistory.length === 0 ? (
              <p className="text-sm text-slate-500 italic">Nessuna misurazione.</p>
            ) : (
              <div className="space-y-2">
                {[...sortedHistory].reverse().map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-2 bg-slate-800 border border-slate-700 rounded-lg text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-200">{entry.weight} kg</span>
                      <span className="text-xs text-slate-500">
                        {format(parseISO(entry.date), 'd MMM yyyy', { locale: it })}
                      </span>
                    </div>
                    <button 
                      onClick={() => onRemoveEntry(entry.id)}
                      className="text-slate-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chart Section */}
        <div className="lg:col-span-2 min-h-[300px]">
          {sortedHistory.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(str) => format(parseISO(str), 'd MMM', { locale: it })}
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  domain={[minWeight, maxWeight]} 
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `${val}kg`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    borderRadius: '8px', 
                    border: '1px solid #334155', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
                    color: '#f8fafc'
                  }}
                  cursor={{ fill: '#334155' }}
                  formatter={(value: number) => [`${value} kg`, 'Peso']}
                  labelFormatter={(label: string) => format(parseISO(label), 'd MMMM yyyy', { locale: it })}
                />
                <Bar 
                  dataKey="weight" 
                  fill="#6366f1" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-xl">
              Inserisci i dati per vedere il grafico
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
