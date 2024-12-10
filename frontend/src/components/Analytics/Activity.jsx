import React from 'react';
import { Calendar, Mail, Phone, ListTodo, Link } from 'lucide-react';

const activities = [
  {
    title: 'We scheduled a meeting for next week',
    dueDate: '10 Feb 2024, 09:00 am',
    type: 'Meeting',
    person: { name: 'Darlee Robertson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' }
  },
  {
    title: 'Built landing pages',
    dueDate: '12 Mar 2024, 08:30 am',
    type: 'Email',
    person: { name: 'Carol Thomas', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' }
  },
  {
    title: 'Call John and discuss about project',
    dueDate: '20 Apr 2024, 03:15 pm',
    type: 'Calls',
    person: { name: 'Sharon Roy', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
  }
];

const getActivityIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'meeting': return <Calendar className="w-4 h-4 text-purple-500" />;
    case 'email': return <Mail className="w-4 h-4 text-yellow-500" />;
    case 'calls': return <Phone className="w-4 h-4 text-green-500" />;
    case 'task': return <ListTodo className="w-4 h-4 text-blue-500" />;
    default: return null;
  }
};

export function Activity() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-800">Activities</h2>
          <Link className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md text-sm">
            <option>Last 30 days</option>
          </select>
          <button className="px-4 py-1.5 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors">
            Add Activity
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-500 mt-1">Due Date : {activity.dueDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={activity.person.avatar}
                alt={activity.person.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <select className="px-3 py-1.5 border rounded-md text-sm">
                <option>Inprogress</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
