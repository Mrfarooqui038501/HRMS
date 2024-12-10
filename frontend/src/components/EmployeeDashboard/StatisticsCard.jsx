import React from 'react';
import { Timer, Clock } from 'lucide-react';

export default function StatisticsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Statistics</h2>
        <select className="px-3 py-1 border rounded-lg text-gray-600">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="bg-orange-50 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-700">Work Time</h3>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-500 transition-colors">
            <Clock size={18} />
            Clock-In
          </button>
        </div>
        <p className="text-2xl font-semibold text-gray-800">6 Hrs : 54 Min</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-600 mb-1">Remaining</p>
          <p className="font-semibold">2 Hrs 36 Min</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-1">Overtime</p>
          <p className="font-semibold">0 Hrs 00 Min</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-1">Break</p>
          <p className="font-semibold">1 Hrs 20 Min</p>
        </div>
      </div>

      <button className="w-full mt-6 text-blue-500 font-medium hover:text-blue-600 transition-colors">
        View Attendance →
      </button>
    </div>
  );
}