import React, { useState } from 'react';

const Holiday = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, name: 'New Year', date: '2024-01-01' },
    { id: 2, name: 'Easter', date: '2024-04-09' },
    { id: 3, name: 'Christmas', date: '2024-12-25' },
  ]);

  const [newHoliday, setNewHoliday] = useState({ name: '', date: '' });

  const handleAddHoliday = () => {
    if (newHoliday.name && newHoliday.date) {
      setHolidays([...holidays, { id: Date.now(), ...newHoliday }]);
      setNewHoliday({ name: '', date: '' }); // Reset input fields
    }
  };

  const handleRemoveHoliday = (id) => {
    setHolidays(holidays.filter((holiday) => holiday.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Holiday List</h2>

        <div className="mb-4">
          <input
            type="text"
            value={newHoliday.name}
            onChange={(e) => setNewHoliday({ ...newHoliday, name: e.target.value })}
            placeholder="Holiday Name"
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={newHoliday.date}
            onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={handleAddHoliday}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Holiday
          </button>
        </div>

        <div className="space-y-4">
          {holidays.map((holiday) => (
            <div
              key={holiday.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">{holiday.name}</span>
                <span className="text-sm text-gray-600">{holiday.date}</span>
              </div>
              <button
                onClick={() => handleRemoveHoliday(holiday.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holiday;
