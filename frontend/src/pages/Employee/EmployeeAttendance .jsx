import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiClock } from "react-icons/fi";
// import Navbar from '../components/Navbar';

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const activities = [
    { time: "10:00 AM", action: "Punch In" },
    { time: "11:00 AM", action: "Punch Out" },
    { time: "11:15 AM", action: "Punch In" },
    { time: "1:30 PM", action: "Punch In" },
    { time: "2:00 PM", action: "Punch Out" },
    { time: "7:30 PM", action: "Punch Out" },
  ];

  const tableData = [
    { date: "19 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hrs", overtime: "0" },
    { date: "20 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hrs", overtime: "0" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6 mt-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Attendance</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Timesheet */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Timesheet 11 Mar 2019</h2>
          <p className="text-gray-600">Punch In at</p>
          <p className="font-medium text-gray-800">Wed, 11th Mar 2019 10:00 AM</p>
          <div className="my-6 flex items-center justify-center">
            <div className="text-4xl font-bold">3.45 hrs</div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">Punch Out</button>
          <div className="flex justify-between mt-4">
            <p className="text-gray-600">Break: <span className="font-bold">1.21 hrs</span></p>
            <p className="text-gray-600">Overtime: <span className="font-bold">3 hrs</span></p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Statistics</h2>
          {[
            { label: "Today", current: 3.45, total: 8, color: "bg-orange-400" },
            { label: "This Week", current: 28, total: 40, color: "bg-yellow-400" },
            { label: "This Month", current: 90, total: 160, color: "bg-green-400" },
            { label: "Remaining", current: 90, total: 160, color: "bg-red-400" },
            { label: "Overtime", current: 4, total: 10, color: "bg-blue-400" },
          ].map((stat, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">{stat.label}</span>
                <span className="text-gray-600">
                  {stat.current} / {stat.total}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${stat.color}`}
                  style={{ width: `${(stat.current / stat.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Today Activity</h2>
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center space-x-2">
                <FiClock className="text-gray-500" />
                <span className="text-gray-800 font-medium">{activity.action} at</span>
                <span className="text-gray-600">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex space-x-4 mb-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border px-3 py-2 rounded-lg"
          />
          <select
            className="border px-3 py-2 rounded-lg"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {new Date(0, i).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>
          <select
            className="border px-3 py-2 rounded-lg"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {[2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
              <th className="px-4 py-2 border border-gray-300">Punch In</th>
              <th className="px-4 py-2 border border-gray-300">Punch Out</th>
              <th className="px-4 py-2 border border-gray-300">Production</th>
              <th className="px-4 py-2 border border-gray-300">Break</th>
              <th className="px-4 py-2 border border-gray-300">Overtime</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{row.date}</td>
                <td className="px-4 py-2 border border-gray-300">{row.punchIn}</td>
                <td className="px-4 py-2 border border-gray-300">{row.punchOut}</td>
                <td className="px-4 py-2 border border-gray-300">{row.production}</td>
                <td className="px-4 py-2 border border-gray-300">{row.break}</td>
                <td className="px-4 py-2 border border-gray-300">{row.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
