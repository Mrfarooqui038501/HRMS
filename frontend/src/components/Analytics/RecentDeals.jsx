import React from 'react';
import { Link } from 'lucide-react';

const deals = [
  { name: 'Collins', stage: 'Conversation', value: '$04,51,000', probability: '85 %', status: 'Open' },
  { name: 'Konopelski', stage: 'Pipeline', value: '$03,12,500', probability: '15 %', status: 'Lost' },
  { name: 'Adams', stage: 'Won', value: '$04,14,800', probability: '95 %', status: 'Won' },
  { name: 'Schumm', stage: 'Lost', value: '$09,14,400', probability: '47 %', status: 'Lost' },
  { name: 'Wisozk', stage: 'Follow Up', value: '$11,14,400', probability: '98 %', status: 'Lost' },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'open': return 'bg-blue-100 text-blue-800';
    case 'won': return 'bg-emerald-100 text-emerald-800';
    case 'lost': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function RecentDeals() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-800">Recently Created Deals</h2>
          <Link className="w-4 h-4 text-gray-400" />
        </div>
        <select className="px-3 py-1.5 border rounded-md text-sm">
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">Deal Name</th>
              <th className="pb-4">Stage</th>
              <th className="pb-4">Deal Value</th>
              <th className="pb-4">Probability</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {deals.map((deal) => (
              <tr key={deal.name} className="border-t">
                <td className="py-4">{deal.name}</td>
                <td className="py-4">{deal.stage}</td>
                <td className="py-4">{deal.value}</td>
                <td className="py-4">{deal.probability}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deal.status)}`}>
                    {deal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
