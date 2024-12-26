import React, { useState, useEffect } from "react";
import { attendanceService, employeeService } from "../../api/axios";

const AttendancePage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSession, setCurrentSession] = useState({
    punchIn: null,
    punchOut: null,
    break: 0, // Total break time in minutes
    production: 0, // Total production time in minutes
    overtime: 0, // Overtime in minutes
  });

  // Fetch employees and attendance data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const employees = await employeeService.getAllEmployees();
        setEmployees(employees);

        const attendance = await attendanceService.getAllAttendance();
        setAttendanceData(attendance);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Punch In
  const handlePunchIn = async () => {
    if (!selectedEmployee) {
      alert("Please select an employee!");
      return;
    }
    if (currentSession.punchIn) {
      alert("Already punched in!");
      return;
    }

    const now = new Date();
    setCurrentSession((prev) => ({
      ...prev,
      punchIn: now,
    }));
  };

  // Punch Out
  const handlePunchOut = async () => {
    if (!currentSession.punchIn) {
      alert("You need to punch in first!");
      return;
    }

    const now = new Date();
    const sessionDuration = (now - currentSession.punchIn) / (1000 * 60); // Convert to minutes
    const production = sessionDuration - currentSession.break;

    const attendanceRecord = {
      employeeId: selectedEmployee,
      date: new Date().toISOString().split("T")[0], // Only the date part
      punchIn: currentSession.punchIn.toLocaleTimeString(),
      punchOut: now.toLocaleTimeString(),
      production: `${Math.floor(production / 60)} hrs ${production % 60} mins`,
      break: `${Math.floor(currentSession.break / 60)} hrs ${currentSession.break % 60} mins`,
      overtime: `${Math.floor(currentSession.overtime / 60)} hrs ${currentSession.overtime % 60} mins`,
    };

    try {
      await attendanceService.addAttendance(attendanceRecord);
      setAttendanceData((prev) => [...prev, attendanceRecord]);
      alert("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error saving attendance:", error);
    } finally {
      setCurrentSession({
        punchIn: null,
        punchOut: null,
        break: 0,
        production: 0,
        overtime: 0,
      });
    }
  };

  // Record Break
  const handleBreak = () => {
    if (!currentSession.punchIn) {
      alert("You need to punch in first!");
      return;
    }
    setCurrentSession((prev) => ({
      ...prev,
      break: prev.break + 15, // Assume 15-minute breaks
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-800">Attendance</h1>

      {/* Employee Selector */}
      <div className="mb-4">
        <label htmlFor="employee" className="block mb-2 text-gray-700">
          Select Employee
        </label>
        <select
          id="employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee._id} value={employee._id}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={handlePunchIn}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Punch In
        </button>
        <button
          onClick={handlePunchOut}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Punch Out
        </button>
        <button
          onClick={handleBreak}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Take Break
        </button>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">#</th>
                <th className="px-4 py-2 border border-gray-300">Employee</th>
                <th className="px-4 py-2 border border-gray-300">Date</th>
                <th className="px-4 py-2 border border-gray-300">Punch In</th>
                <th className="px-4 py-2 border border-gray-300">Punch Out</th>
                <th className="px-4 py-2 border border-gray-300">Production</th>
                <th className="px-4 py-2 border border-gray-300">Break</th>
                <th className="px-4 py-2 border border-gray-300">Overtime</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={row._id || index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.employeeName || "N/A"}</td>
                  <td className="px-4 py-2 border border-gray-300">{new Date(row.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.punchIn}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.punchOut}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.production}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.break}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.overtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
