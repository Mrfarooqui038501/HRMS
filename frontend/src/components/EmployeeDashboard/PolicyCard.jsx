import React from 'react';
import { Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PolicyCard() {
  const policies = [
    {
      type: 'HR',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      title: 'HR Policy',
      name: 'Work policy',
      date: 'Today'
    },
    {
      type: 'EP',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      title: 'Employer Policy',
      name: 'Parking',
      date: '25 Jan 2024'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Company Policy</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {policies.map((policy, index) => (
          <div 
            key={index} 
            className={`${policy.bgColor} rounded-xl p-4`}
          >
            <div className={`w-12 h-12 ${policy.bgColor} ${policy.color} rounded-lg flex items-center justify-center font-medium mb-4`}>
              {policy.type}
            </div>
            <h3 className="text-lg font-semibold mb-4">{policy.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Policy Name :</span>
                <span className="font-medium">{policy.name}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Updated on :</span>
                <span className="font-medium">{policy.date}</span>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                <Download size={20} />
              </button>
              <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                <Eye size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
