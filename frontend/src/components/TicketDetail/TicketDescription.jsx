import React from 'react';

function TicketDescription({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
    </div>
  );
}

export default TicketDescription;
