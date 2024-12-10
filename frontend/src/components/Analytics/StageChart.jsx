import React from 'react';
import { BarChart } from 'lucide-react';

const data = [
  { stage: 'Inpipeline', count: 400 },
  { stage: 'Follow Up', count: 30 },
  { stage: 'Schedule', count: 246 },
  { stage: 'Conversation', count: 476 },
  { stage: 'Won', count: 476 },
  { stage: 'Lost', count: 186 },
];

export function StageChart() {
  const maxCount = Math.max(...data.map(d => d.count));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Leads By Stage</h2>
        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Sales Pipeline</option>
          </select>
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.stage} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.stage}</span>
              <span>{item.count}</span>
            </div>
            <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full"
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
