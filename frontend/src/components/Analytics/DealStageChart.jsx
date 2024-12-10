import React from 'react';
import { BarChart } from 'lucide-react';

const stages = [
  { name: 'Conversation', value: 380, color: 'bg-emerald-400' },
  { name: 'Follow Up', value: 150, color: 'bg-emerald-400' },
  { name: 'Pipeline', value: 250, color: 'bg-emerald-400' },
];

export function DealStageChart() {
  const maxValue = Math.max(...stages.map(stage => stage.value));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Won Deals Stage</h2>
        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Marketing Pipeline</option>
          </select>
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{stage.name}</span>
              <span>{stage.value}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${stage.color} transition-all duration-500`}
                style={{ width: `${(stage.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
