import React from 'react';
import { BarChart } from './BarChart';

export default function AttendanceCard() {
  const stats = [
    { label: 'Total Leaves', value: '9', color: 'text-orange-500' },
    { label: 'Leaves Taken', value: '5.5', color: 'text-red-500' },
    { label: 'Leaves Absent', value: '04', color: 'text-green-500' },
    { label: 'Pending Approval', value: '0', color: 'text-purple-500' },
    { label: 'Working Days', value: '214', color: 'text-blue-500' },
    { label: 'Loss of Pay', value: '2', color: 'text-red-500' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Attendance & Leaves</h2>
        <select className="px-3 py-1 border rounded-lg text-gray-600">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-xl hover:bg-gray-100 transition-colors mb-8">
        Apply Leave →
      </button>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Working hours</h3>
          <select className="px-3 py-1 border rounded-lg text-gray-600">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
        <BarChart />
      </div>
    </div>
  );
}
