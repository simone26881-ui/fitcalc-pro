import React from 'react';
import { Card, Label, Input, Select } from './ui';

export interface UserData {
  age: number;
  weight: number;
  height: number;
  gender: 'male' | 'female';
  activityLevel: number;
  fatLossGrams: number;
}

interface CalculatorFormProps {
  userData: UserData;
  onChange: (data: UserData) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ userData, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({
      ...userData,
      [name]: name === 'gender' ? value : Number(value),
    });
  };

  return (
    <Card className="h-full">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="bg-indigo-500/20 text-indigo-400 p-1.5 rounded-lg text-sm">1</span>
        I tuoi Dati
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Sesso</Label>
          <Select name="gender" value={userData.gender} onChange={handleChange}>
            <option value="male">Uomo</option>
            <option value="female">Donna</option>
          </Select>
        </div>

        <div>
          <Label>Età (anni)</Label>
          <Input 
            type="number" 
            name="age" 
            value={userData.age || ''} 
            onChange={handleChange} 
            min="0"
            placeholder="Es. 30"
          />
        </div>

        <div>
          <Label>Peso (kg)</Label>
          <Input 
            type="number" 
            name="weight" 
            value={userData.weight || ''} 
            onChange={handleChange} 
            min="0"
            step="0.1"
            placeholder="Es. 75"
          />
        </div>

        <div>
          <Label>Altezza (cm)</Label>
          <Input 
            type="number" 
            name="height" 
            value={userData.height || ''} 
            onChange={handleChange} 
            min="0"
            placeholder="Es. 175"
          />
        </div>

        <div className="md:col-span-2">
          <Label>Livello Attività Fisica</Label>
          <Select name="activityLevel" value={userData.activityLevel} onChange={handleChange}>
            <option value={1.2}>Sedentario (poco o nulla esercizio)</option>
            <option value={1.375}>Leggermente attivo (esercizio leggero 1-3 gg/sett)</option>
            <option value={1.55}>Moderatamente attivo (esercizio moderato 3-5 gg/sett)</option>
            <option value={1.725}>Molto attivo (esercizio pesante 6-7 gg/sett)</option>
            <option value={1.9}>Estremamente attivo (lavoro fisico o allenamento 2x/gg)</option>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label>Grassi da eliminare al giorno (g)</Label>
          <div className="relative">
            <Input 
              type="number" 
              name="fatLossGrams" 
              value={userData.fatLossGrams || ''} 
              onChange={handleChange} 
              min="0"
              placeholder="Es. 20"
              className="pr-12"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400 text-sm">
              g/day
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            1g di grasso corporeo ≈ 9 kcal di deficit
          </p>
        </div>
      </div>
    </Card>
  );
};
