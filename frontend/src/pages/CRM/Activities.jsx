import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Activities = () => {
  const [data, setData] = useState([
    { title: 'Team Meeting', type: 'Meeting', dueDate: '2024-12-01', owner: 'Alice', createdAt: '2024-11-15' },
    { title: 'Client Call', type: 'Call', dueDate: '2024-11-25', owner: 'Bob', createdAt: '2024-11-10' },
    { title: 'Follow-up Email', type: 'Follow-up Email', dueDate: '2024-12-05', owner: 'Charlie', createdAt: '2024-11-20' },
  ]);

  const [formData, setFormData] = useState({ title: '', type: '', dueDate: '', owner: '', createdAt: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Activity
  const addRow = () => {
    if (!formData.title || !formData.type || !formData.dueDate || !formData.owner) return;

    const newRow = {
      ...formData,
    };

    setData([...data, newRow]);
    setFormData({ title: '', type: '', dueDate: '', owner: '', createdAt: '' });
    setIsFormVisible(false);  // Hide the form after adding
  };

  // Edit Activity
  const editRow = (title) => {
    const row = data.find((item) => item.title === title);
    setFormData(row);
    setIsFormVisible(true);  // Show form when editing
  };

  // Update Activity
  const updateRow = () => {
    setData(data.map((item) => (item.title === formData.title ? formData : item)));
    setFormData({ title: '', type: '', dueDate: '', owner: '', createdAt: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Activity
  const deleteRow = (title) => {
    setData(data.filter((item) => item.title !== title));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Activities</h2>

      {/* Add Activity Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Activity is clicked
          setFormData({ title: '', type: '', dueDate: '', owner: '', createdAt: '' });
        }}
        className="mb-6 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Activity
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.title ? 'Edit Activity' : 'Add New Activity'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Activity Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Activity Type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Owner"
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.createdAt}
              onChange={(e) => setFormData({ ...formData, createdAt: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={formData.title ? updateRow : addRow}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              {formData.title ? 'Update Activity' : 'Add Activity'}
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto w-full bg-white shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full table-auto">
          {/* Table Header */}
          <thead className="bg-orange-400 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-left">Title</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Activity Type</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Due Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Owner</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Created At</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-800">
            {data.map((row) => (
              <tr key={row.title} className="hover:bg-orange-100 hover:text-gray-900 transition duration-300 ease-in-out">
                <td className="px-6 py-4 border-t border-gray-200">{row.title}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.type}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.dueDate}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.owner}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.createdAt}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button onClick={() => editRow(row.title)} className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button onClick={() => deleteRow(row.title)} className="text-red-600 hover:text-red-800 ml-3"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Activities;
