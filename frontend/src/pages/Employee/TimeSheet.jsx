import React, { useState, useEffect } from 'react';
import { timesheetService, employeeService } from '../../api/axios';

const TimeSheet = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [timeSheetData, setTimeSheetData] = useState([]);
  const [newTimeSheet, setNewTimeSheet] = useState({
    employeeId: '',
    date: '',
    hours: '',
    task: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch employees on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesResponse = await employeeService.getAllEmployees();
        console.log("Employee API Response:", employeesResponse);

        // Ensure employees have _id and name properties
        const formattedEmployees = employeesResponse.data?.map((employee) => ({
          _id: employee._id || employee.employeeId, // Adjust based on your backend
          name: employee.name || employee.fullName, // Adjust based on your backend
        }));

        setEmployees(formattedEmployees || []); 
      } catch (error) {
        console.error('Error fetching employees:', error);
        setEmployees([]); // Fallback to an empty array
      }
    };

    fetchEmployees();
  }, []);

  // Fetch time sheets when an employee is selected
  useEffect(() => {
    const fetchTimeSheets = async () => {
      if (selectedEmployee) {
        try {
          const response = await timesheetService.getTimeSheetsByEmployee(selectedEmployee);
          setTimeSheetData(response.data || []); // Default to an empty array
        } catch (error) {
          console.error('Error fetching time sheets:', error);
          setTimeSheetData([]); // Fallback to an empty array
        }
      }
    };

    fetchTimeSheets();
  }, [selectedEmployee]);

  // Handle employee selection
  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTimeSheet((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new time sheet entry
  const handleAddTimeSheet = async () => {
    try {
      if (selectedEmployee && newTimeSheet.date && newTimeSheet.hours && newTimeSheet.task) {
        const response = await timesheetService.addTimeSheet({
          employeeId: selectedEmployee,
          ...newTimeSheet,
        });

        setTimeSheetData([...timeSheetData, response.data]); // Update the time sheet list
        setNewTimeSheet({ employeeId: '', date: '', hours: '', task: '' }); // Reset the form
      } else {
        alert('Please fill in all fields');
      }
    } catch (error) {
      console.error('Error adding time sheet:', error);
      alert('Failed to add time sheet');
    }
  };

  // Edit an existing time sheet entry
  const handleEditTimeSheet = (timeSheet) => {
    setNewTimeSheet({
      date: timeSheet.date,
      hours: timeSheet.hours,
      task: timeSheet.task,
    });
    setIsEditing(true);
    setEditingId(timeSheet._id);
  };

  // Save the edited time sheet entry
  const handleSaveEdit = async () => {
    try {
      const response = await timesheetService.updateTimeSheet(editingId, newTimeSheet);

      const updatedTimeSheets = timeSheetData.map((item) =>
        item._id === editingId ? response.data : item
      );
      setTimeSheetData(updatedTimeSheets);
      setIsEditing(false);
      setNewTimeSheet({ employeeId: '', date: '', hours: '', task: '' });
    } catch (error) {
      console.error('Error updating time sheet:', error);
      alert('Failed to update time sheet');
    }
  };

  // Delete a time sheet entry
  const handleDeleteTimeSheet = async (timeSheetId) => {
    try {
      await timesheetService.deleteTimeSheet(timeSheetId);

      const updatedTimeSheets = timeSheetData.filter((item) => item._id !== timeSheetId);
      setTimeSheetData(updatedTimeSheets);
    } catch (error) {
      console.error('Error deleting time sheet:', error);
      alert('Failed to delete time sheet');
    }
  }

  
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
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
          {employees.length > 0 ? (
            employees.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.name}
              </option>
            ))
          ) : (
            <option disabled>No Employees Found</option>
          )}
        </select>
      </div>

      {/* Add/Edit Time Sheet Form */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-medium mb-4">
          {isEditing ? 'Edit Time Sheet' : 'Add New Time Sheet'}
        </h3>
        <div className="space-y-4">
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
              <th className="py-2 px-4 text-left border-b font-medium">Date</th>
              <th className="py-2 px-4 text-left border-b font-medium">Hours</th>
              <th className="py-2 px-4 text-left border-b font-medium">Task</th>
              <th className="py-2 px-4 text-left border-b font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeSheetData.length > 0 ? (
              timeSheetData.map((timeSheet) => (
                <tr key={timeSheet._id}>
                  <td className="py-2 px-4 border-b">{timeSheet.date}</td>
                  <td className="py-2 px-4 border-b">{timeSheet.hours}</td>
                  <td className="py-2 px-4 border-b">{timeSheet.task}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => handleEditTimeSheet(timeSheet)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTimeSheet(timeSheet._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Time Sheets Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeSheet;
