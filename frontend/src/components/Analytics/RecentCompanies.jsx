import React from 'react';
import { Link } from 'lucide-react';

const companies = [
  {
    name: 'NovaWaveLLC',
    email: 'robertson@example.com',
    phone: '+1 875455453',
    createdAt: '12 Jan 2024, 10:00 am'
  },
  {
    name: 'SilverHawk',
    email: 'vaughan15@example.com',
    phone: '+1 546555455',
    createdAt: '20 Jan 2024, 12:20 pm'
  },
  // Add more companies as needed
];

export function RecentCompanies() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Recently Added Companies</h2>
          <Link className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Last 30 days</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-2">
            Add Company
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">Company Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Phone</th>
              <th className="pb-4">Created at</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {companies.map((company) => (
              <tr key={company.name} className="border-t">
                <td className="py-4">{company.name}</td>
                <td className="py-4">{company.email}</td>
                <td className="py-4">{company.phone}</td>
                <td className="py-4">{company.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
