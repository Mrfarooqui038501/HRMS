import React, { useState, useEffect } from "react";
import { departmentService } from "../../api/axios";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({ name: "", location: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all departments on page load
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await departmentService.getAllDepartments(); // Fetch from backend
        setDepartments(data); // Set state with fetched data
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments(); // Call fetch on component mount
  }, []);

  // Add a new department
  const handleAddDepartment = async () => {
    if (newDepartment.name && newDepartment.location) {
      setLoading(true);
      try {
        const addedDepartment = await departmentService.addDepartment(newDepartment); // Add to backend
        setDepartments([...departments, addedDepartment.department]); // Append to local state
        setNewDepartment({ name: "", location: "" }); // Reset input fields
      } catch (error) {
        console.error("Error adding department:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill out both fields before adding a department.");
    }
  };

  // Remove a department
  const handleRemoveDepartment = async (id) => {
    try {
      await departmentService.removeDepartment(id); // Remove from backend
      setDepartments(departments.filter((department) => department._id !== id)); // Update local state
      alert("Department removed successfully!");
    } catch (error) {
      console.error("Error removing department:", error);
      alert("Failed to remove department. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Departments</h2>
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
          <button
            onClick={handleAddDepartment}
            className="px-4 py-2 mt-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? "Adding..." : "Add Department"}
          </button>
        </div>

        {/* Department List */}
        <div className="space-y-4">
          {departments.map((department) => (
            <div
              key={department._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">{department.name}</span>
                <span className="text-sm text-gray-600">{department.location}</span>
                <span className="text-sm text-gray-500">ID: {department.departmentId}</span>
              </div>
              <button
                onClick={() => handleRemoveDepartment(department._id)}
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
