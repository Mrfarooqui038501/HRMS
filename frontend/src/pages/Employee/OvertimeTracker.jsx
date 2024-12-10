import React, { useState } from 'react';
import { CalendarIcon, CheckCircle2Icon, XCircleIcon, ClockIcon } from 'lucide-react';

const OvertimeTracker = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const employees = [
    { id: 1, name: 'Employee A' },
    { id: 2, name: 'Employee B' },
    { id: 3, name: 'Employee C' },
  ];

  const employeeData = {
    1: {
      name: 'Employee A',
      overtime: [
        { day: 1, hours: 2, status: 'approved' },
        { day: 2, hours: 1, status: 'pending' },
        { day: 3, hours: 3, status: 'approved' },
        { day: 7, hours: 4, status: 'pending' },
        // More data for employee
      ],
    },
    2: {
      name: 'Employee B',
      overtime: [
        { day: 2, hours: 2, status: 'approved' },
        { day: 6, hours: 1, status: 'pending' },
      ],
    },
    3: {
      name: 'Employee C',
      overtime: [
        { day: 4, hours: 1, status: 'approved' },
        { day: 10, hours: 2, status: 'pending' },
      ],
    },
  };

  const statusConfig = {
    approved: { label: 'Approved', color: 'bg-green-500', icon: CheckCircle2Icon },
    pending: { label: 'Pending', color: 'bg-yellow-500', icon: ClockIcon },
  };

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const generateCalendar = (year, month) => {
    const totalDays = daysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return [
      ...Array(firstDay).fill(null),
      ...days,
    ];
  };

  const getOvertimeForDay = (day, selectedEmployee) => {
    if (!day || !selectedEmployee) return null;

    return selectedEmployee.overtime.find((entry) => entry.day === day);
  };

  const calendarDays = generateCalendar(selectedYear, selectedMonth);

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <CalendarIcon className="mr-3 text-blue-600" />
            Overtime Tracker
          </h1>
          <div className="flex space-x-4">
            <select
              onChange={(e) => setSelectedEmployee(employeeData[e.target.value])}
              className="border rounded px-3 py-2"
            >
              <option value="" disabled selected>
                Select Employee
              </option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="border rounded px-3 py-2"
            >
              {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
              className="border rounded px-3 py-2"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month - 1).toLocaleString('default', {
                    month: 'long',
                  })}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedEmployee && (
          <>
            <div className="grid grid-cols-7 gap-2 text-center bg-gray-50 rounded-lg p-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="font-bold text-gray-600">{day}</div>
              ))}
              {calendarDays.map((day, index) => {
                const overtime = day ? getOvertimeForDay(day, selectedEmployee) : null;
                const { color, label, icon: StatusIcon } = overtime
                  ? statusConfig[overtime.status]
                  : { color: 'bg-gray-100', label: '', icon: null };

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${color} text-white relative group ${day ? 'cursor-pointer hover:scale-105' : ''}`}
                  >
                    {day && (
                      <>
                        <div className="font-semibold">{day}</div>
                        {overtime && (
                          <div className="absolute bottom-1 right-1">
                            <StatusIcon className="w-4 h-4" />
                          </div>
                        )}
                        {overtime && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {label} ({overtime.hours} hours)
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-gray-700">Overtime Summary</h2>
              <p>Total Overtime Hours: {selectedEmployee.overtime.reduce((total, entry) => total + entry.hours, 0)} hours</p>
              <p>Approved Overtime Hours: {selectedEmployee.overtime.filter((entry) => entry.status === 'approved').reduce((total, entry) => total + entry.hours, 0)} hours</p>
              <p>Pending Overtime Hours: {selectedEmployee.overtime.filter((entry) => entry.status === 'pending').reduce((total, entry) => total + entry.hours, 0)} hours</p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-700">Overtime Requests</h2>
              <div className="space-y-2">
                {selectedEmployee.overtime.map((overtime) => (
                  <div key={overtime.day} className="flex justify-between">
                    <span>Day {overtime.day}</span>
                    <div>
                      {overtime.status === 'pending' && (
                        <span className="text-yellow-600">Pending</span>
                      )}
                      {overtime.status === 'approved' && (
                        <span className="text-green-600">Approved</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OvertimeTracker;
