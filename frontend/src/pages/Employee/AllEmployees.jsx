import React, { useState } from 'react';

// Sample employee list (this can be dynamically fetched or passed as props)
const initialEmployees = [
  { id: 1, name: 'John Doe', department: 'HR', position: 'Manager', status: 'Active' },
  { id: 2, name: 'Jane Smith', department: 'IT', position: 'Developer', status: 'Active' },
  { id: 3, name: 'Alice Johnson', department: 'Marketing', position: 'Lead', status: 'Inactive' },
  { id: 4, name: 'Bob Brown', department: 'Finance', position: 'Analyst', status: 'Active' },
  { id: 5, name: 'Charlie White', department: 'Sales', position: 'Salesperson', status: 'Active' },
];

const AllEmployeesPage = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    department: '',
    position: '',
    status: 'Active',
  });

  // Handle the search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter employees based on the search query (search by ID or Name)
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(query) ||
        employee.id.toString().includes(query)
    );
    setFilteredEmployees(filtered);
  };

  // Handle the input changes for adding new employee
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new employee to the list
  const handleAddEmployee = () => {
    const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;
    setEmployees([
      ...employees,
      { ...newEmployee, id: newId },
    ]);
    setShowAddEmployeeModal(false); // Close the modal after adding employee
    setNewEmployee({
      id: '',
      name: '',
      department: '',
      position: '',
      status: 'Active',
    }); // Reset the form
  };

  // Toggle modal visibility
  const toggleAddEmployeeModal = () => {
    setShowAddEmployeeModal(!showAddEmployeeModal);
  };

  // Handle removing employee
  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      {/* Header Section */}
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Employees</h2>
        <button
          onClick={toggleAddEmployeeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Employee
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by Employee ID or Name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Employees Table */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b font-medium">Employee ID</th>
              <th className="py-2 px-4 text-left border-b font-medium">Name</th>
              <th className="py-2 px-4 text-left border-b font-medium">Department</th>
              <th className="py-2 px-4 text-left border-b font-medium">Position</th>
              <th className="py-2 px-4 text-left border-b font-medium">Status</th>
              <th className="py-2 px-4 text-left border-b font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.department}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`py-1 px-2 rounded-full text-white ${
                      employee.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleRemoveEmployee(employee.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Employee Modal */}
      {showAddEmployeeModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-2xl font-semibold mb-4">Add New Employee</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={newEmployee.department}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter Department"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                name="position"
                value={newEmployee.position}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter Position"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={newEmployee.status}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={toggleAddEmployeeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmployee}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployeesPage;
