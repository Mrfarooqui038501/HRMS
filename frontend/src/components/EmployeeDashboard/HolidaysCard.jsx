import React from 'react';
import { Calendar } from 'lucide-react';

export default function HolidaysCard() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Upcoming Holidays</h2>
      <div className="flex items-center gap-4 mb-4">
        <Calendar className="w-8 h-8" />
        <div>
          <p className="font-medium">Ramzan</p>
          <p className="opacity-90">Mon 20 May 2024</p>
        </div>
      </div>
      <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors">
        View All
      </button>
    </div>
  );
}