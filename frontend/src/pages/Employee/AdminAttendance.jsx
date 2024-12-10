import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';

const AdminAttendance = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [employeeName, setEmployeeName] = useState('');
  
    const employees = [
      { id: 1, name: 'John Doe', photo: 'https://via.placeholder.com/40', attendance: generateAttendance() },
      { id: 2, name: 'Richard Miles', photo: 'https://via.placeholder.com/40', attendance: generateAttendance() },
      { id: 3, name: 'John Smith', photo: 'https://via.placeholder.com/40', attendance: generateAttendance() },
      // Add more employees here
    ];
  
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  
    function generateAttendance() {
      return Array.from({ length: 30 }, () => (Math.random() > 0.8 ? '❌' : '✔'));
    }
  
    const handleSearch = () => {
      console.log('Search clicked');
    };
  
    return (
      <div className="p-6 space-y-6 bg-gray-100 min-h-screen mt-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Attendance</h1>
        </div>
  
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Employee Name"
            className="border px-3 py-2 rounded-lg w-1/4"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <select
            className="border px-3 py-2 rounded-lg w-1/4"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <select
            className="border px-3 py-2 rounded-lg w-1/4"
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
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
  
        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Employee</th>
                {daysInMonth.map((day) => (
                  <th key={day} className="px-2 py-2 border border-gray-300">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300 flex items-center">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {employee.name}
                  </td>
                  {employee.attendance.map((status, index) => (
                    <td
                      key={index}
                      className={`px-2 py-2 border border-gray-300 text-center ${
                        status === '✔' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {status}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AdminAttendance;