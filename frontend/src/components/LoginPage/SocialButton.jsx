import React from 'react';

export function SocialButton({ icon: Icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium py-3 px-4 rounded-lg border border-gray-200 transition-colors">
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}