import React, { useState, useMemo } from 'react';
import { Search, Edit, Trash2, Plus } from 'lucide-react';

// Sample employee list with more details
const employees = [
  { 
    id: 'EMP001', 
    name: 'John Doe', 
    department: 'Engineering', 
    email: 'john.doe@company.com' 
  },
  { 
    id: 'EMP002', 
    name: 'Jane Smith', 
    department: 'Marketing', 
    email: 'jane.smith@company.com' 
  },
  { 
    id: 'EMP003', 
    name: 'Alice Johnson', 
    department: 'HR', 
    email: 'alice.johnson@company.com' 
  },
  { 
    id: 'EMP004', 
    name: 'Bob Brown', 
    department: 'Sales', 
    email: 'bob.brown@company.com' 
  }
];

// Initial schedule data
const initialScheduleData = [
  { 
    id: 1, 
    employeeId: 'EMP001', 
    employeeName: 'John Doe', 
    time: '9:00 AM - 5:00 PM', 
    task: 'Meeting with client',
    department: 'Engineering' 
  },
  { 
    id: 2, 
    employeeId: 'EMP002', 
    employeeName: 'Jane Smith', 
    time: '9:30 AM - 4:30 PM', 
    task: 'Work on project X',
    department: 'Marketing' 
  },
];

const DailyScheduling = () => {
  const [scheduleData, setScheduleData] = useState(initialScheduleData);
  const [newSchedule, setNewSchedule] = useState({ 
    employeeId: '', 
    employeeName: '', 
    time: '', 
    task: '',
    department: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Search and filter functionality
  const filteredSchedules = useMemo(() => {
    return scheduleData.filter(schedule => 
      schedule.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [scheduleData, searchTerm]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  // Add new schedule entry
  const handleAddSchedule = () => {
    if (newSchedule.employeeName && newSchedule.time && newSchedule.task) {
      setScheduleData([...scheduleData, { 
        ...newSchedule, 
        id: Date.now() 
      }]);
      setNewSchedule({ 
        employeeId: '', 
        employeeName: '', 
        time: '', 
        task: '',
        department: ''
      });
    } else {
      alert('Please fill all the fields');
    }
  };

  // Edit an existing schedule
  const handleEditSchedule = (id) => {
    const schedule = scheduleData.find((item) => item.id === id);
    setNewSchedule(schedule);
    setIsEditing(true);
    setEditingId(id);
  };

  // Save edited schedule
  const handleSaveEdit = () => {
    const updatedSchedule = scheduleData.map((item) =>
      item.id === editingId ? { ...item, ...newSchedule } : item
    );
    setScheduleData(updatedSchedule);
    setIsEditing(false);
    setNewSchedule({ 
      employeeId: '', 
      employeeName: '', 
      time: '', 
      task: '',
      department: ''
    });
  };

  // Delete a schedule entry
  const handleDeleteSchedule = (id) => {
    const updatedSchedule = scheduleData.filter((item) => item.id !== id);
    setScheduleData(updatedSchedule);
  };

  // Populate employee details when selecting an employee
  const handleEmployeeSelect = (employee) => {
    setNewSchedule(prev => ({
      ...prev,
      employeeId: employee.id,
      employeeName: employee.name,
      department: employee.department
    }));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen mt-10">
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Daily Scheduling</h1>

        {/* Search and Filter */}
        <div className="mb-6 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by name or employee ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Employees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {employees.map((employee) => (
            <div 
              key={employee.id}
              onClick={() => handleEmployeeSelect(employee)}
              className={`
                p-4 rounded-lg cursor-pointer transition-all duration-300
                ${newSchedule.employeeId === employee.id 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-white border border-gray-200 hover:shadow-md'}
              `}
            >
              <h3 className="font-semibold text-lg">{employee.name}</h3>
              <p className="text-sm text-gray-600">{employee.id}</p>
              <p className="text-sm text-gray-500">{employee.department}</p>
            </div>
          ))}
        </div>

        {/* Schedule Form */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {isEditing ? 'Edit Schedule' : 'Add New Schedule'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="employeeName"
              value={newSchedule.employeeName}
              placeholder="Employee Name"
              className="p-3 border rounded-lg"
              disabled
            />
            <input
              type="text"
              name="time"
              value={newSchedule.time}
              onChange={handleInputChange}
              placeholder="Time Slot (e.g., 9:00 AM - 5:00 PM)"
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              name="task"
              value={newSchedule.task}
              onChange={handleInputChange}
              placeholder="Task Description"
              className="p-3 border rounded-lg"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={isEditing ? handleSaveEdit : handleAddSchedule}
              className={`
                flex items-center px-4 py-2 rounded-lg text-white
                ${isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}
              `}
            >
              <Plus className="mr-2" size={20} />
              {isEditing ? 'Save Changes' : 'Add Schedule'}
            </button>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Employee</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Task</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.map((schedule) => (
                <tr key={schedule.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold">{schedule.employeeName}</div>
                        <div className="text-sm text-gray-500">{schedule.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{schedule.department}</td>
                  <td className="p-3">{schedule.time}</td>
                  <td className="p-3">{schedule.task}</td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center space-x-2">
                      <button 
                        onClick={() => handleEditSchedule(schedule.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDeleteSchedule(schedule.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyScheduling;