import React, { useState } from 'react';

// Sample employee list (this can be dynamically fetched or passed as props)
const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' }
];

// Sample time sheet data (this can be dynamically fetched or updated)
const initialTimeSheetData = [
  { id: 1, employee: 'John Doe', date: '2024-11-29', hours: '8', task: 'Client Meeting' },
  { id: 2, employee: 'Jane Smith', date: '2024-11-29', hours: '7', task: 'Project Work' },
];

const TimeSheet = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [timeSheetData, setTimeSheetData] = useState(initialTimeSheetData);
  const [newTimeSheet, setNewTimeSheet] = useState({ employee: '', date: '', hours: '', task: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle employee dropdown change
  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTimeSheet((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new time sheet entry
  const handleAddTimeSheet = () => {
    if (newTimeSheet.employee && newTimeSheet.date && newTimeSheet.hours && newTimeSheet.task) {
      setTimeSheetData([...timeSheetData, { ...newTimeSheet, id: Date.now() }]);
      setNewTimeSheet({ employee: '', date: '', hours: '', task: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  // Edit an existing time sheet entry
  const handleEditTimeSheet = (id) => {
    const timeSheet = timeSheetData.find((item) => item.id === id);
    setNewTimeSheet(timeSheet);
    setIsEditing(true);
    setEditingId(id);
  };

  // Save the edited time sheet entry
  const handleSaveEdit = () => {
    const updatedTimeSheet = timeSheetData.map((item) =>
      item.id === editingId ? { ...item, ...newTimeSheet } : item
    );
    setTimeSheetData(updatedTimeSheet);
    setIsEditing(false);
    setNewTimeSheet({ employee: '', date: '', hours: '', task: '' });
  };

  // Delete a time sheet entry
  const handleDeleteTimeSheet = (id) => {
    const updatedTimeSheet = timeSheetData.filter((item) => item.id !== id);
    setTimeSheetData(updatedTimeSheet);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Time Sheet</h2>
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

      {/* Add/Edit Time Sheet Form */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-medium mb-4">{isEditing ? 'Edit Time Sheet' : 'Add New Time Sheet'}</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="employee"
            value={newTimeSheet.employee}
            onChange={handleInputChange}
            placeholder="Employee Name"
            className="border border-gray-300 rounded-md p-2 w-full"
            disabled={isEditing} // Disable employee input when editing
          />
          <input
            type="date"
            name="date"
            value={newTimeSheet.date}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="number"
            name="hours"
            value={newTimeSheet.hours}
            onChange={handleInputChange}
            placeholder="Hours Worked"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="task"
            value={newTimeSheet.task}
            onChange={handleInputChange}
            placeholder="Task"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button
            onClick={isEditing ? handleSaveEdit : handleAddTimeSheet}
            className="bg-blue-500 text-white p-3 rounded-md w-full mt-4 hover:bg-blue-600"
          >
            {isEditing ? 'Save Changes' : 'Add Time Sheet'}
          </button>
        </div>
      </div>

      {/* Time Sheet Table */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b font-medium">Employee</th>
              <th className="py-2 px-4 text-left border-b font-medium">Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">Hours</th>
              <th className="py-2 px-4 text-left border-b font-medium">Task</th>
              <th className="py-2 px-4 text-left border-b font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeSheetData.map((timeSheet) => (
              <tr key={timeSheet.id}>
                <td className="py-2 px-4 border-b">{timeSheet.employee}</td>
                <td className="py-2 px-4 border-b">{timeSheet.date}</td>
                <td className="py-2 px-4 border-b">{timeSheet.hours}</td>
                <td className="py-2 px-4 border-b">{timeSheet.task}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleEditTimeSheet(timeSheet.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTimeSheet(timeSheet.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
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

export default TimeSheet;
