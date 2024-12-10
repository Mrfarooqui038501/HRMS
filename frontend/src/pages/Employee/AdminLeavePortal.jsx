import React, { useState } from 'react';

// Sample employee list (this can be dynamically fetched or passed as props)
const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' }
];

// Sample leave data (this can be dynamically fetched or updated)
const initialLeaveRequests = [
  { id: 1, employee: 'John Doe', leaveType: 'Sick Leave', fromDate: '2024-11-29', toDate: '2024-11-30', status: 'Pending' },
  { id: 2, employee: 'Jane Smith', leaveType: 'Vacation', fromDate: '2024-12-01', toDate: '2024-12-05', status: 'Pending' },
  { id: 3, employee: 'Alice Johnson', leaveType: 'Casual Leave', fromDate: '2024-12-10', toDate: '2024-12-12', status: 'Pending' },
];

const AdminLeavePortal = () => {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  // Change leave request status (Approve/Reject)
  const handleChangeLeaveStatus = (id, status) => {
    const updatedLeaveRequests = leaveRequests.map((leaveRequest) =>
      leaveRequest.id === id ? { ...leaveRequest, status } : leaveRequest
    );
    setLeaveRequests(updatedLeaveRequests);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Admin Leave Portal</h2>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b font-medium">Employee</th>
              <th className="py-2 px-4 text-left border-b font-medium">Leave Type</th>
              <th className="py-2 px-4 text-left border-b font-medium">From Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">To Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">Status</th>
              <th className="py-2 px-4 text-left border-b font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leaveRequest) => (
              <tr key={leaveRequest.id}>
                <td className="py-2 px-4 border-b">{leaveRequest.employee}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.leaveType}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.fromDate}</td>
                <td className="py-2 px-4 border-b">{leaveRequest.toDate}</td>
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
                    onClick={() => handleChangeLeaveStatus(leaveRequest.id, 'Approved')}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleChangeLeaveStatus(leaveRequest.id, 'Rejected')}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
