import React from 'react';

export default function EmployeeCard() {
  return (
    <div className="bg-pink-50 rounded-2xl p-6">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Employee of the month</h2>
          <p className="text-gray-600 max-w-md">
            We are really proud of the difference you have made which gives everybody the
            reason to applaud & appreciate
          </p>
          <div className="space-y-1">
            <div className="text-pink-500 font-medium">Congrats, Hanna</div>
            <div className="text-gray-600">UI/UX Team Lead</div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60" 
            alt="Employee of the month" 
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-lg">
            🏆
          </div>
        </div>
      </div>
    </div>
  );
}