import React, { useState, useEffect } from 'react';
import { departmentService } from '../../api/axios'; // Import department service

const Designations = () => {
  const [designations, setDesignations] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'HR Manager', department: 'Human Resources' },
    { id: 3, title: 'Sales Lead', department: 'Sales' },
  ]);

  const [departments, setDepartments] = useState([]); // For department list
  const [newDesignation, setNewDesignation] = useState({ title: '', department: '' });

  // Fetch all departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await departmentService.getAllDepartments(); // Fetch departments from backend
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  const handleAddDesignation = () => {
    if (newDesignation.title && newDesignation.department) {
      setDesignations([
        ...designations,
        { id: Date.now(), ...newDesignation },
      ]);
      setNewDesignation({ title: '', department: '' }); // Reset input fields
    } else {
      alert('Please fill out all fields before adding a designation.');
    }
  };

  const handleRemoveDesignation = (id) => {
    setDesignations(designations.filter((designation) => designation.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Designations</h2>
        </div>

        {/* New Designation Form */}
        <div className="mb-6">
          <input
            type="text"
            value={newDesignation.title}
            onChange={(e) => setNewDesignation({ ...newDesignation, title: e.target.value })}
            placeholder="Designation Title"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newDesignation.department}
            onChange={(e) => setNewDesignation({ ...newDesignation, department: e.target.value })}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department.departmentId} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddDesignation}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Designation
          </button>
        </div>

        {/* Designation List */}
        <div className="space-y-6">
          {designations.map((designation) => (
            <div
              key={designation.id}
              className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-800">{designation.title}</span>
                <span className="text-sm text-gray-500">{designation.department}</span>
              </div>
              <button
                onClick={() => handleRemoveDesignation(designation.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designations;
