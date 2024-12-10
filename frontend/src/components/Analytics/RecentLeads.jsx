import React from 'react';
import { Link } from 'lucide-react';

const leads = [
  {
    name: 'Collins',
    company: { name: 'NovaWaveLLC', location: 'Newyork, USA' },
    phone: '+1 875455453',
    status: 'Closed'
  },
  {
    name: 'Konopelski',
    company: { name: 'BlueSky Industries', location: 'Winchester, KY' },
    phone: '+1 989757485',
    status: 'Closed'
  },
  // Add more leads as needed
];

const statusColors = {
  Closed: 'text-green-500',
  'Not Contacted': 'text-blue-500',
  Converted: 'text-orange-500'
};

export function RecentLeads() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Recently Created Leads</h2>
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
              <th className="pb-4">Lead Name</th>
              <th className="pb-4">Company Name</th>
              <th className="pb-4">Phone</th>
              <th className="pb-4">Lead Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {leads.map((lead) => (
              <tr key={lead.name} className="border-t">
                <td className="py-4">{lead.name}</td>
                <td className="py-4">
                  <div>{lead.company.name}</div>
                  <div className="text-gray-500 text-xs">{lead.company.location}</div>
                </td>
                <td className="py-4">{lead.phone}</td>
                <td className="py-4">
                  <span className={statusColors[lead.status]}>
                    {lead.status}
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
