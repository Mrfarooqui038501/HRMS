import React, { useState, useEffect } from 'react';
import { employeeService, departmentService } from '../../api/axios';

const AllEmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    department: '',
    position: '',
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
    fetchDesignations();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await employeeService.getAllEmployees();
      const formattedData = data.map((employee) => ({
        ...employee,
        department: employee.department?.name || employee.department,
        position: employee.position?.title || employee.position,
      }));
      setEmployees(formattedData);
      setFilteredEmployees(formattedData);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const data = await departmentService.getAllDepartments();
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const fetchDesignations = async () => {
    // Fetch designations from your backend
    try {
      const data = [
        { id: 1, title: 'Software Engineer' },
        { id: 2, title: 'HR Manager' },
        { id: 3, title: 'Sales Lead' },
      ]; // Replace with actual API call
      setDesignations(data);
    } catch (error) {
      console.error('Error fetching designations:', error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(query) ||
        (employee._id && employee._id.toString().includes(query))
    );
    setFilteredEmployees(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEmployee = async () => {
    try {
      await employeeService.addEmployee(newEmployee);
      await fetchEmployees();
      setShowAddEmployeeModal(false);
      setNewEmployee({
        name: '',
        department: '',
        position: '',
        status: 'ACTIVE',
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const toggleAddEmployeeModal = () => {
    setShowAddEmployeeModal(!showAddEmployeeModal);
  };

  const handleRemoveEmployee = async (id) => {
    if (window.confirm('Are you sure you want to remove this employee?')) {
      try {
        await employeeService.removeEmployee(id);
        await fetchEmployees();
      } catch (error) {
        console.error('Error removing employee:', error);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-10">
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Employees</h2>
        <button
          onClick={toggleAddEmployeeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Employee
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by Employee ID or Name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

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
              <tr key={employee._id}>
                <td className="py-2 px-4 border-b">{employee.employeeId}</td>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.department}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleRemoveEmployee(employee._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
              <select
                name="department"
                value={newEmployee.department}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option key={department.departmentId} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <select
                name="position"
                value={newEmployee.position}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Position</option>
                {designations.map((designation) => (
                  <option key={designation.id} value={designation.title}>
                    {designation.title}
                  </option>
                ))}
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
