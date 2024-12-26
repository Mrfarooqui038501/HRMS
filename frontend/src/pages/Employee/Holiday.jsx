import React, { useState, useEffect } from "react";
import { holidayService } from "../../api/axios";

const Holiday = () => {
  const [holidays, setHolidays] = useState([]);
  const [newHoliday, setNewHoliday] = useState({ name: "", date: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all holidays on page load
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const data = await holidayService.getAllHolidays();
        setHolidays(data);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, []);

  // Add a new holiday
  const handleAddHoliday = async () => {
    if (newHoliday.name && newHoliday.date) {
      setLoading(true);
      try {
        const addedHoliday = await holidayService.addHoliday(newHoliday);
        setHolidays([...holidays, addedHoliday.holiday]);
        setNewHoliday({ name: "", date: "" });
      } catch (error) {
        console.error("Error adding holiday:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill out both fields before adding a holiday.");
    }
  };

  // Remove a holiday
  const handleRemoveHoliday = async (id) => {
    try {
      await holidayService.removeHoliday(id);
      setHolidays(holidays.filter((holiday) => holiday._id !== id));
      alert("Holiday removed successfully!");
    } catch (error) {
      console.error("Error removing holiday:", error);
      alert("Failed to remove holiday. Please try again.");
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Holiday List
        </h2>

        {/* New Holiday Form */}
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
            {loading ? "Adding..." : "Add Holiday"}
          </button>
        </div>

        {/* Holiday List */}
        <div className="space-y-4">
          {holidays.map((holiday) => (
            <div
              key={holiday._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">{holiday.name}</span>
                <span className="text-sm text-gray-600">{holiday.date}</span>
              </div>
              <button
                onClick={() => handleRemoveHoliday(holiday._id)}
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
