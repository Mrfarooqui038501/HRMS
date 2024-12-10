import React, { useState } from 'react';
import { BellIcon, MessageCircleIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New comment on your post', isRead: false },
    { id: 2, text: 'Your task is due tomorrow', isRead: false },
    { id: 3, text: 'New like on your photo', isRead: true },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, from: 'John Doe', content: 'Hey, can you review the task?', isRead: false },
    { id: 2, from: 'Jane Smith', content: 'Meeting scheduled for 3 PM', isRead: true },
  ]);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  const handleToggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-md z-50">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          <Link to='/overview' className="text-3xl font-bold text-white tracking-tight pl-10">HRMS</Link>

          {/* Right section (Icons) */}
          <div className="flex items-center space-x-8">
            {/* Notifications Icon */}
            <div className="relative">
              <BellIcon
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="w-10 h-10 cursor-pointer transition-colors duration-200 hover:text-gray-200"
              />
              {notifications.filter((n) => !n.isRead).length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {notifications.filter((n) => !n.isRead).length}
                </span>
              )}
              {isNotificationsOpen && (
                <div className="absolute right-0 w-72 bg-white shadow-lg rounded-lg mt-2 p-4 z-50">
                  <h3 className="font-semibold mb-2 text-gray-800">Notifications</h3>
                  <ul>
                    {notifications.length === 0 ? (
                      <li className="text-gray-500">No notifications</li>
                    ) : (
                      notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className={`p-2 ${notification.isRead ? 'text-gray-500' : 'font-semibold text-gray-800'}`}
                        >
                          {notification.text}
                        </li>
                      ))
                    )}
                  </ul>
                  {notifications.length > 0 && (
                    <button
                      onClick={handleClearNotifications}
                      className="w-full mt-2 text-center text-red-600 font-semibold hover:text-red-700 transition duration-200"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Messages Icon */}
            <div className="relative">
              <MessageCircleIcon
                onClick={() => setIsMessagesOpen(!isMessagesOpen)}
                className="w-10 h-10 cursor-pointer transition-colors duration-200 hover:text-gray-200"
              />
              {messages.filter((m) => !m.isRead).length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {messages.filter((m) => !m.isRead).length}
                </span>
              )}
              {isMessagesOpen && (
                <div className="absolute right-0 w-72 bg-white shadow-lg rounded-lg mt-2 p-4 z-50">
                  <h3 className="font-semibold mb-2 text-gray-800">Messages</h3>
                  <ul>
                    {messages.length === 0 ? (
                      <li className="text-gray-500">No messages</li>
                    ) : (
                      messages.map((message) => (
                        <li
                          key={message.id}
                          className={`p-2 ${message.isRead ? 'text-gray-500' : 'font-semibold text-gray-800'}`}
                        >
                          <strong>{message.from}: </strong>{message.content}
                        </li>
                      ))
                    )}
                  </ul>
                  {messages.length > 0 && (
                    <button
                      onClick={handleClearMessages}
                      className="w-full mt-2 text-center text-red-600 font-semibold hover:text-red-700 transition duration-200"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <div className="relative">
              <UserIcon
                onClick={handleToggleProfile}
                className="w-10 h-10 cursor-pointer transition-colors duration-200 hover:text-gray-200"
              />
              {isProfileOpen && (
                <div className="absolute right-0 w-48 bg-white shadow-lg rounded-lg mt-2 p-4 z-50">
                  <ul>
                    <li className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">My Profile</li>
                    <li className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</li>
                    <Link to='/' className="py-2 text-red-600 font-semibold hover:bg-gray-100 cursor-pointer">Logout</Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
