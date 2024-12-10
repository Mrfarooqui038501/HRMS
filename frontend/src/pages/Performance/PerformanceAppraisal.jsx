import React, { useState } from 'react';

const Table = ({ headers, data, handleDelete, handleEdit }) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full table-auto border-separate border-spacing-0 shadow-lg rounded-lg bg-white">
        <thead className="bg-orange-400 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-lg font-semibold">{header}</th>
            ))}
            <th className="px-6 py-3 text-left text-lg font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const statusClass = row[3] === 'On Track' ? 'text-green-600 font-bold' :
              row[3] === 'At Risk' ? 'text-orange-600 font-bold' :
              'text-red-600 font-bold';

            return (
              <tr key={rowIndex} className={`transition-all hover:bg-orange-50 ${rowIndex % 2 === 0 ? 'bg-orange-100' : ''} border-b border-gray-200`}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`px-6 py-4 text-sm text-center ${cellIndex === 3 ? statusClass : ''} ${cellIndex === 0 ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                    {cell}
                  </td>
                ))}
                <td className="px-6 py-4 text-sm text-center space-x-2">
                  <button
                    onClick={() => handleEdit(rowIndex)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(rowIndex)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const PerformanceTable = () => {
  const [tableData, setTableData] = useState([
    ['John Doe', 'Developer', '85%', 'On Track'],
    ['Jane Smith', 'Designer', '70%', 'At Risk'],
    ['Mark Johnson', 'Project Manager', '92%', 'On Track'],
    ['Emily Davis', 'QA Engineer', '60%', 'Off Track']
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', value: '', status: 'On Track' });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = [newEmployee.name, newEmployee.role, newEmployee.value, newEmployee.status];
      setTableData(updatedData);
      setEditIndex(null);
    } else {
      setTableData(prevData => [...prevData, [newEmployee.name, newEmployee.role, newEmployee.value, newEmployee.status]]);
    }
    setIsFormVisible(false);
    setNewEmployee({ name: '', role: '', value: '', status: 'On Track' });
  };

  const handleDelete = (index) => {
    setTableData(prevData => prevData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setNewEmployee({
      name: tableData[index][0],
      role: tableData[index][1],
      value: tableData[index][2],
      status: tableData[index][3]
    });
    setIsFormVisible(true);
    setEditIndex(index);
  };

  return (
    <div className=" mt-10 container mx-auto px-6 bg-orange-50 min-h-screen py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Performance Appraisal</h2>

      {/* Add New Button */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          {isFormVisible ? 'Cancel' : 'Add New Employee'}
        </button>
      </div>

      {/* Add New Employee Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="role"
              value={newEmployee.role}
              onChange={handleChange}
              placeholder="Role"
              required
              className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="value"
              value={newEmployee.value}
              onChange={handleChange}
              placeholder="Performance Value"
              required
              className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex space-x-4">
            <select
              name="status"
              value={newEmployee.status}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="On Track">On Track</option>
              <option value="At Risk">At Risk</option>
              <option value="Off Track">Off Track</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              {editIndex !== null ? 'Update Employee' : 'Add Employee'}
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <Table
        headers={['Name', 'Role', 'Performance Value', 'Status']}
        data={tableData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default PerformanceTable;
