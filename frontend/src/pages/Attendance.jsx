import React, { useState } from 'react';
import { 
  CalendarIcon, 
  CheckCircle2Icon, 
  XCircleIcon, 
  ClockIcon 
} from 'lucide-react';

const Attendance = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const attendanceData = {
    2024: {
      11: [
        { day: 1, status: 'P' },
        { day: 2, status: 'P' },
        { day: 3, status: 'A' },
        { day: 4, status: 'NH' },
        { day: 5, status: 'P' },
        { day: 6, status: 'P' },
        { day: 7, status: 'P' },
        { day: 8, status: 'P' },
        { day: 9, status: 'P' },
        { day: 10, status: 'P' },
        { day: 11, status: 'P' },
        { day: 12, status: 'P' },
        { day: 13, status: 'P' },
        { day: 14, status: 'P' },
        { day: 15, status: 'NH' },
        { day: 16, status: 'A' },
        { day: 17, status: 'P' },
        { day: 18, status: 'P' },
        { day: 19, status: 'P' },
        { day: 20, status: 'P' },
        { day: 21, status: 'P' },
        { day: 22, status: 'P' },
        { day: 23, status: 'P' },
        { day: 24, status: 'P' },
        { day: 25, status: 'L' },
        { day: 26, status: 'A' },
        { day: 27, status: 'P' },
        { day: 28, status: 'P' },
        { day: 29, status: 'P' },
        { day: 30, status: 'P' },
      ],
    },
  };

  const statusConfig = {
    'P': { 
      label: 'Present', 
      color: 'bg-green-500', 
      icon: CheckCircle2Icon 
    },
    'A': { 
      label: 'Absent', 
      color: 'bg-red-500', 
      icon: XCircleIcon 
    },
    'NH': { 
      label: 'Non-Holiday', 
      color: 'bg-blue-500', 
      icon: ClockIcon 
    },
    'L': { 
      label: 'Late', 
      color: 'bg-yellow-500', 
      icon: ClockIcon 
    }
  };

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const generateCalendar = (year, month) => {
    const totalDays = daysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return [
      ...Array(firstDay).fill(null),
      ...days
    ];
  };

  const calendarDays = generateCalendar(selectedYear, selectedMonth);
  const currentAttendance =
    attendanceData[selectedYear]?.[selectedMonth] || [];

  const getStatusForDay = (day) => {
    const attendance = currentAttendance.find((entry) => entry.day === day);
    return attendance ? attendance.status : '';
  };

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <CalendarIcon className="mr-3 text-blue-600" />
            Attendance
          </h1>
          <div className="flex space-x-4">
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

        <div className="grid grid-cols-7 gap-2 text-center bg-gray-50 rounded-lg p-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="font-bold text-gray-600">{day}</div>
          ))}
          {calendarDays.map((day, index) => {
            const status = day ? getStatusForDay(day) : '';
            const { color, label, icon: StatusIcon } = status 
              ? statusConfig[status] 
              : { color: 'bg-gray-100', label: '', icon: null };

            return (
              <div
                key={index}
                className={`
                  p-4 
                  rounded-lg 
                  ${color} 
                  text-white 
                  relative 
                  group
                  ${day ? 'cursor-pointer hover:scale-105' : ''}
                `}
              >
                {day && (
                  <>
                    <div className="font-semibold">{day}</div>
                    {status && (
                      <div className="absolute bottom-1 right-1">
                        <StatusIcon className="w-4 h-4" />
                      </div>
                    )}
                    {status && (
                      <div className="
                        absolute 
                        bottom-full 
                        left-1/2 
                        transform 
                        -translate-x-1/2 
                        -translate-y-2
                        bg-black 
                        text-white 
                        text-xs 
                        px-2 
                        py-1 
                        rounded 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                      ">
                        {label}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {Object.entries(statusConfig).map(([key, { label, color, icon: StatusIcon }]) => (
            <div key={key} className="flex items-center space-x-2">
              <StatusIcon className={`w-6 h-6 ${color}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;