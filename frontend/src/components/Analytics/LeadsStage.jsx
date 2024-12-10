import React from 'react';

const stages = ['Conversation', 'Follow Up', 'Inpipeline'];

export function LeadsStage({ title, barColor }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">{title}</h2>
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
          <div key={stage} className="space-y-2">
            <div className="text-sm">{stage}</div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${barColor} rounded-full`}
                style={{ width: `${Math.random() * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
