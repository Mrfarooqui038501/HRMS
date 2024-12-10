import React from 'react';

export default function WelcomeCard({ name, meetings, imageUrl }) {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Welcome Back, {name}</h1>
          <p className="text-lg opacity-90">You have {meetings} meetings today</p>
          <button className="mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors">
            View Profile
          </button>
        </div>
        <img 
          src={imageUrl} 
          alt="Profile" 
          className="w-16 h-16 rounded-full border-2 border-white/50"
        />
      </div>
    </div>
  );
}
