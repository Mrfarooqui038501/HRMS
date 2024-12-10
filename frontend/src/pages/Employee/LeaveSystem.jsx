import React, { useState } from 'react';

// Sample employee list (this can be dynamically fetched or passed as props)
const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' }
];

// Sample leave data (this can be dynamically fetched or updated)
const initialLeaveData = [
  { id: 1, employee: 'John Doe', leaveType: 'Sick Leave', fromDate: '2024-11-29', toDate: '2024-11-30', status: 'Pending' },
  { id: 2, employee: 'Jane Smith', leaveType: 'Vacation', fromDate: '2024-12-01', toDate: '2024-12-05', status: 'Approved' },
];

const LeaveSystem = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [leaveData, setLeaveData] = useState(initialLeaveData);
  const [newLeaveRequest, setNewLeaveRequest] = useState({
    employee: '',
    leaveType: '',
    fromDate: '',
    toDate: '',
    status: 'Pending',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle employee dropdown change
  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeaveRequest((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new leave request
  const handleAddLeaveRequest = () => {
    if (newLeaveRequest.employee && newLeaveRequest.leaveType && newLeaveRequest.fromDate && newLeaveRequest.toDate) {
      setLeaveData([
        ...leaveData,
        { ...newLeaveRequest, id: Date.now() }
      ]);
      setNewLeaveRequest({ employee: '', leaveType: '', fromDate: '', toDate: '', status: 'Pending' });
    } else {
      alert('Please fill in all fields');
    }
  };

  // Edit an existing leave request
  const handleEditLeaveRequest = (id) => {
    const leaveRequest = leaveData.find((item) => item.id === id);
    setNewLeaveRequest(leaveRequest);
    setIsEditing(true);
    setEditingId(id);
  };

  // Save the edited leave request
  const handleSaveEdit = () => {
    const updatedLeaveData = leaveData.map((item) =>
      item.id === editingId ? { ...item, ...newLeaveRequest } : item
    );
    setLeaveData(updatedLeaveData);
    setIsEditing(false);
    setNewLeaveRequest({ employee: '', leaveType: '', fromDate: '', toDate: '', status: 'Pending' });
  };

  // Change leave request status (for admin)
  const handleChangeLeaveStatus = (id, status) => {
    const updatedLeaveData = leaveData.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    setLeaveData(updatedLeaveData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Leave Request System</h2>
      </div>

      {/* Employee Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedEmployee}
          onChange={handleEmployeeChange}
          className="border border-gray-300 rounded-md p-2 text-lg w-1/3"
        >
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Leave Request Form */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-medium mb-4">{isEditing ? 'Edit Leave Request' : 'Request New Leave'}</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="employee"
            value={newLeaveRequest.employee}
            onChange={handleInputChange}
            placeholder="Employee Name"
            className="border border-gray-300 rounded-md p-2 w-full"
            disabled={isEditing} // Disable employee input when editing
          />
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
          <input
            type="date"
            name="fromDate"
            value={newLeaveRequest.fromDate}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="date"
            name="toDate"
            value={newLeaveRequest.toDate}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button
            onClick={isEditing ? handleSaveEdit : handleAddLeaveRequest}
            className="bg-blue-500 text-white p-3 rounded-md w-full mt-4 hover:bg-blue-600"
          >
            {isEditing ? 'Save Changes' : 'Submit Leave Request'}
          </button>
        </div>
      </div>

      {/* Leave Request Table */}
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
            {leaveData.map((leaveRequest) => (
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
                    onClick={() => handleEditLeaveRequest(leaveRequest.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
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

export default LeaveSystem;
