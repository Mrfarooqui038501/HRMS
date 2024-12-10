import React, { useState } from 'react';
import { Bell, Calendar, Clock, Users, Video, MapPin } from 'lucide-react';

export default function NotificationsCard() {
  const [activeTab, setActiveTab] = useState('notifications'); // Changed from TypeScript to JavaScript

  const notifications = [
    {
      id: 'hr',
      avatar: 'HR',
      title: 'Your leave request has been',
      time: '02:10 PM',
      date: '21 Apr 2024'
    },
    {
      id: 'er',
      avatar: 'ER',
      title: "You're enrolled in upcom....",
      time: '12:40 PM',
      date: '21 Apr 2024'
    },
    {
      id: 'sm',
      avatar: 'SM',
      title: 'Your annual compliance trai',
      time: '11:00 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'jessica',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
      title: 'Jessica has requested feedba',
      time: '10:30 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'dt',
      avatar: 'DT',
      title: 'Gentle remainder about train',
      time: '09:00 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'au',
      avatar: 'AU',
      title: 'Our HR system will be down',
      time: '11:50 AM',
      date: '21 Apr 2024'
    }
  ];

  const schedules = [
    {
      id: 1,
      title: 'Team Weekly Sync',
      time: '09:00 AM - 10:00 AM',
      type: 'meeting',
      attendees: 8,
      location: 'Virtual',
      icon: Users
    },
    {
      id: 2,
      title: 'Product Demo',
      time: '11:30 AM - 12:30 PM',
      type: 'presentation',
      attendees: 12,
      location: 'Conference Room A',
      icon: Video
    },
    {
      id: 3,
      title: 'Client Workshop',
      time: '02:00 PM - 04:00 PM',
      type: 'workshop',
      attendees: 15,
      location: 'Innovation Lab',
      icon: MapPin
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Important</h2>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Calendar size={20} />
          </button>
        </div>
      </div>

      {/* Notifications / Schedules Toggle */}
      <div className="flex gap-4 mb-6">
        <button 
          className={`pb-2 transition-colors ${
            activeTab === 'notifications'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
        <button 
          className={`pb-2 transition-colors ${
            activeTab === 'schedules'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          onClick={() => setActiveTab('schedules')}
        >
          Schedules
        </button>
      </div>

      {/* Content Section */}
      {activeTab === 'notifications' ? (
        /* Notifications List */
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              {/* Conditional Rendering for Avatar */}
              {notification.id === 'jessica' ? (
                <img 
                  src={notification.avatar} 
                  alt={notification.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  notification.id === 'hr' ? 'bg-red-100 text-red-600' : 
                  notification.id === 'er' ? 'bg-blue-100 text-blue-600' : 
                  notification.id === 'sm' ? 'bg-orange-100 text-orange-600' : 
                  notification.id === 'dt' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {notification.avatar}
                </div>
              )}
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{notification.title}</p>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span>{notification.time}</span>
                  <span>•</span>
                  <span>{notification.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Schedules List */
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="p-4 rounded-lg border border-gray-100 hover:border-orange-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                  <schedule.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{schedule.title}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{schedule.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={14} />
                      <span>{schedule.attendees} attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={14} />
                      <span>{schedule.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
