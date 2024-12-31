import React, { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { employeeService, overtimeService } from "../../api/axios";

const OvertimeTracker = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [overtimeDetails, setOvertimeDetails] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [loadingOvertime, setLoadingOvertime] = useState(false);

  // Fetch employees on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await employeeService.getAllEmployees();
        console.log("Fetched Employees:", response); // Debug response
        setEmployees(response || []); // Ensure response is not undefined
      } catch (err) {
        console.error("Failed to fetch employees:", err);
      } finally {
        setLoadingEmployees(false);
      }
    };

    fetchEmployees();
  }, []);

  // Fetch overtime details for the selected employee
  const fetchOvertimeDetails = async (employeeId) => {
    if (!employeeId) return;
    setLoadingOvertime(true);
    try {
      const response = await overtimeService.getOvertimeByEmployee(employeeId);
      console.log("Fetched Overtime Details:", response); // Debug response
      setOvertimeDetails(response || []); // Ensure response is not undefined
    } catch (err) {
      console.error("Failed to fetch overtime details:", err);
    } finally {
      setLoadingOvertime(false);
    }
  };

  // Handle employee selection
  const handleEmployeeSelect = (e) => {
    const employeeId = e.target.value;
    setSelectedEmployee(employeeId);
    fetchOvertimeDetails(employeeId);
  };

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <CalendarIcon className="mr-3 text-blue-600" />
            Overtime Tracker
          </h1>
          <div className="flex space-x-4">
            {loadingEmployees ? (
              <p>Loading employees...</p>
            ) : (
              <select
                value={selectedEmployee}
                onChange={handleEmployeeSelect}
                className="border rounded px-3 py-2"
              >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee._id} value={employee._id}>
                    {employee.name} - {employee.employeeId}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Display Overtime Details */}
        {selectedEmployee && (
          <div>
            <h2 className="text-xl font-bold mt-6">Overtime Details</h2>
            {loadingOvertime ? (
              <p>Loading overtime details...</p>
            ) : overtimeDetails.length > 0 ? (
              <table className="w-full mt-4 border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Day</th>
                    <th className="border px-4 py-2">Hours</th>
                    <th className="border px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {overtimeDetails.map((detail) => (
                    <tr key={detail._id}>
                      <td className="border px-4 py-2">{detail.day}</td>
                      <td className="border px-4 py-2">{detail.hours}</td>
                      <td className="border px-4 py-2">
                        {detail.status === "approved" ? (
                          <span className="text-green-500">Approved</span>
                        ) : (
                          <span className="text-yellow-500">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No overtime details available for the selected employee.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OvertimeTracker;
