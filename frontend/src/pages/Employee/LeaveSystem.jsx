import React, { useState, useEffect } from 'react';
import { leaveService } from '../../api/axios';
import { employeeService } from '../../api/axios';

const LeaveSystem = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedEmployeeDetails, setSelectedEmployeeDetails] = useState(null);
  const [leaveData, setLeaveData] = useState([]);
  const [newLeaveRequest, setNewLeaveRequest] = useState({
    employeeId: '',
    leaveType: '',
    fromDate: '',
    toDate: '',
    status: 'Pending',
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await employeeService.getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchLeaveRequests = async (employeeId) => {
    try {
      const data = await leaveService.getLeaveRequestsByEmployee(employeeId);
      setLeaveData(data);
    } catch (error) {
      console.error('Error fetching leave requests:', error);
    }
  };

  const handleEmployeeChange = (e) => {
    const employeeId = e.target.value;
    const selectedEmp = employees.find(emp => emp._id === employeeId);
    setSelectedEmployee(employeeId);
    setSelectedEmployeeDetails(selectedEmp);
    fetchLeaveRequests(employeeId);
    setNewLeaveRequest((prev) => ({ ...prev, employeeId }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeaveRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyLeave = async () => {
    if (newLeaveRequest.employeeId && newLeaveRequest.leaveType && newLeaveRequest.fromDate && newLeaveRequest.toDate) {
      try {
        const response = await leaveService.applyLeave(newLeaveRequest);
        fetchLeaveRequests(newLeaveRequest.employeeId);
        setNewLeaveRequest({
          employeeId: selectedEmployee,
          leaveType: '',
          fromDate: '',
          toDate: '',
          status: 'Pending'
        });
        alert('Leave request submitted successfully.');
      } catch (error) {
        console.error('Error applying for leave:', error);
        alert(error.response?.data?.message || 'Failed to submit leave request.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave Request System</h2>

      {/* Employee Selection Section */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-medium mb-4">Select Employee</h3>
        <div className="space-y-4">
          <select
            value={selectedEmployee}
            onChange={handleEmployeeChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.employeeId} - {employee.name}
              </option>
            ))}
          </select>

          {selectedEmployeeDetails && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium mb-2">Selected Employee Details:</h4>
              <p>Employee ID: {selectedEmployeeDetails.employeeId}</p>
              <p>Name: {selectedEmployeeDetails.name}</p>
              {selectedEmployeeDetails.department && (
                <p>Department: {selectedEmployeeDetails.department}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Leave Request Form */}
      {selectedEmployee && (
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-medium mb-4">Request New Leave</h3>
          <div className="space-y-4">
            <select
              name="leaveType"
              value={newLeaveRequest.leaveType}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Vacation">Vacation</option>
              <option value="Casual Leave">Casual Leave</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={newLeaveRequest.fromDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                <input
                  type="date"
                  name="toDate"
                  value={newLeaveRequest.toDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
            </div>
            <button
              onClick={handleApplyLeave}
              className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600"
            >
              Submit Leave Request
            </button>
          </div>
        </div>
      )}

      {/* Leave Request Table */}
      {selectedEmployee && leaveData.length > 0 && (
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-medium mb-4">Leave Requests History</h3>
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b font-medium">Employee ID</th>
                <th className="py-2 px-4 text-left border-b font-medium">Employee Name</th>
                <th className="py-2 px-4 text-left border-b font-medium">Leave Type</th>
                <th className="py-2 px-4 text-left border-b font-medium">From Date</th>
                <th className="py-2 px-4 text-left border-b font-medium">To Date</th>
                <th className="py-2 px-4 text-left border-b font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave) => (
                <tr key={leave._id}>
                  <td className="py-2 px-4 border-b">{selectedEmployeeDetails.employeeId}</td>
                  <td className="py-2 px-4 border-b">{selectedEmployeeDetails.name}</td>
                  <td className="py-2 px-4 border-b">{leave.leaveType}</td>
                  <td className="py-2 px-4 border-b">{new Date(leave.fromDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(leave.toDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        leave.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : leave.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeaveSystem;