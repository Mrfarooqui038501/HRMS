import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Pipeline = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Sales Pipeline', totalDealValue: 150000, numDeals: 20, stages: ['Prospecting', 'Negotiation', 'Closed'], createdDate: '2024-09-01', status: 'Active' },
    { id: 2, name: 'Marketing Pipeline', totalDealValue: 80000, numDeals: 15, stages: ['Lead Generation', 'Qualification', 'Conversion'], createdDate: '2024-08-15', status: 'Active' },
    { id: 3, name: 'Expansion Pipeline', totalDealValue: 200000, numDeals: 30, stages: ['Initial Contact', 'In Discussion', 'Closing'], createdDate: '2024-10-05', status: 'Completed' },
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', totalDealValue: '', numDeals: '', stages: [], createdDate: '', status: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Pipeline
  const addRow = () => {
    if (!formData.name || !formData.totalDealValue || !formData.numDeals || !formData.stages.length) return;

    const newRow = {
      ...formData,
      id: data.length + 1, // Auto increment ID
    };

    setData([...data, newRow]);
    setFormData({ id: '', name: '', totalDealValue: '', numDeals: '', stages: [], createdDate: '', status: '' });
    setIsFormVisible(false);  // Hide the form after adding
  };

  // Edit Pipeline
  const editRow = (id) => {
    const row = data.find((item) => item.id === id);
    setFormData(row);
    setIsFormVisible(true);  // Show form when editing
  };

  // Update Pipeline
  const updateRow = () => {
    setData(data.map((item) => (item.id === formData.id ? formData : item)));
    setFormData({ id: '', name: '', totalDealValue: '', numDeals: '', stages: [], createdDate: '', status: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Pipeline
  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Pipelines</h2>

      {/* Add Pipeline Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Pipeline is clicked
          setFormData({ id: '', name: '', totalDealValue: '', numDeals: '', stages: [], createdDate: '', status: '' });
        }}
        className="mb-6 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Pipeline
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.id ? 'Edit Pipeline' : 'Add New Pipeline'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Pipeline Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Total Deal Value"
              value={formData.totalDealValue}
              onChange={(e) => setFormData({ ...formData, totalDealValue: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Number of Deals"
              value={formData.numDeals}
              onChange={(e) => setFormData({ ...formData, numDeals: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Stages (comma separated)"
              value={formData.stages.join(', ')}
              onChange={(e) => setFormData({ ...formData, stages: e.target.value.split(',').map(stage => stage.trim()) })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.createdDate}
              onChange={(e) => setFormData({ ...formData, createdDate: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              onClick={formData.id ? updateRow : addRow}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              {formData.id ? 'Update Pipeline' : 'Add Pipeline'}
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
              <th className="px-6 py-3 text-sm font-medium text-left">ID</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Pipeline Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Total Deal Value</th>
              <th className="px-6 py-3 text-sm font-medium text-left">No. of Deals</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Stages</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Created Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-800">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-orange-100 hover:text-gray-900 transition duration-300 ease-in-out">
                <td className="px-6 py-4 border-t border-gray-200">{row.id}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.name}</td>
                <td className="px-6 py-4 border-t border-gray-200">${row.totalDealValue}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.numDeals}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <ul className="flex space-x-2">
                    {row.stages.map((stage, index) => (
                      <li key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">{stage}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">{row.createdDate}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <span className={`px-3 py-1 rounded-full text-xs ${row.status === 'Active' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>{row.status}</span>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button onClick={() => editRow(row.id)} className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button onClick={() => deleteRow(row.id)} className="text-red-600 hover:text-red-800 ml-3"><FaTrash /></button>
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

export default Pipeline;
