import React, { useState } from 'react';

const Department = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Engineering', location: 'Building A' },
    { id: 2, name: 'HR', location: 'Building B' },
    { id: 3, name: 'Sales', location: 'Building C' },
  ]);

  const [newDepartment, setNewDepartment] = useState({ name: '', location: '' });

  const handleAddDepartment = () => {
    if (newDepartment.name && newDepartment.location) {
      setDepartments([...departments, { id: Date.now(), ...newDepartment }]);
      setNewDepartment({ name: '', location: '' }); // Reset input fields
    }
  };

  const handleRemoveDepartment = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Departments</h2>
          <div>
            <button
              onClick={handleAddDepartment}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Department
            </button>
          </div>
        </div>

        {/* New Department Form */}
        <div className="mb-4">
          <input
            type="text"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
            placeholder="Department Name"
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={newDepartment.location}
            onChange={(e) => setNewDepartment({ ...newDepartment, location: e.target.value })}
            placeholder="Department Location"
            className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Department List */}
        <div className="space-y-4">
          {departments.map((department) => (
            <div
              key={department.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">{department.name}</span>
                <span className="text-sm text-gray-600">{department.location}</span>
              </div>
              <button
                onClick={() => handleRemoveDepartment(department.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
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

export default Department;
