import React, { useState, useEffect } from 'react';
import { leaveService } from '../../api/axios';
import { employeeService } from '../../api/axios';

const AdminLeavePortal = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch leave requests with employee details
  const fetchLeaveRequests = async () => {
    try {
      const response = await leaveService.getAllLeaveRequests();
      setLeaveRequests(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch leave requests');
      setLoading(false);
    }
  };

  // Handle status change
  const handleChangeLeaveStatus = async (leaveId, newStatus) => {
    try {
      await leaveService.updateLeaveStatus({ leaveId, status: newStatus });
      // Refresh the leave requests after update
      fetchLeaveRequests();
    } catch (err) {
      setError('Failed to update leave status');
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Admin Leave Portal</h2>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b font-medium">Employee ID</th>
              <th className="py-2 px-4 text-left border-b font-medium">Employee Name</th>
              <th className="py-2 px-4 text-left border-b font-medium">Department</th>
              <th className="py-2 px-4 text-left border-b font-medium">Leave Type</th>
              <th className="py-2 px-4 text-left border-b font-medium">From Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">To Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">Status</th>
              <th className="py-2 px-4 text-left border-b font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leaveRequest) => (
              <tr key={leaveRequest._id}>
                <td className="py-2 px-4 border-b">{leaveRequest.employeeId.employeeId}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.employeeId.name}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.employeeId.department}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.leaveType}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(leaveRequest.fromDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(leaveRequest.toDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`py-1 px-2 rounded-full text-white ${
                      leaveRequest.status === 'Pending'
                        ? 'bg-yellow-500'
                        : leaveRequest.status === 'Approved'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {leaveRequest.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleChangeLeaveStatus(leaveRequest._id, 'Approved')}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    disabled={leaveRequest.status !== 'Pending'}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleChangeLeaveStatus(leaveRequest._id, 'Rejected')}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    disabled={leaveRequest.status !== 'Pending'}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLeavePortal;