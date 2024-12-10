import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Deals = () => {
  const [data, setData] = useState([
    { id: 1, name: 'TechCorp Expansion', stage: 'Negotiation', value: '500K', tags: ['Software', 'Growth'], closedDate: '2024-12-15', owner: 'Alice', probability: 75, status: 'Active' },
    { id: 2, name: 'Innovate Ltd Investment', stage: 'Proposal', value: '300K', tags: ['Finance', 'Investment'], closedDate: '2024-11-30', owner: 'Bob', probability: 60, status: 'Active' },
    { id: 3, name: 'Cloudify Merger', stage: 'Discovery', value: '1M', tags: ['Cloud', 'Merger'], closedDate: '2025-01-10', owner: 'Charlie', probability: 50, status: 'Inactive' },
    { id: 4, name: 'DesignWorks Contract', stage: 'Negotiation', value: '200K', tags: ['Design', 'Contract'], closedDate: '2024-10-20', owner: 'David', probability: 80, status: 'Active' },
    { id: 5, name: 'DataX Acquisition', stage: 'Closed', value: '750K', tags: ['Data Science', 'Acquisition'], closedDate: '2024-09-05', owner: 'Eva', probability: 100, status: 'Inactive' }
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', stage: '', value: '', tags: [], closedDate: '', owner: '', probability: '', status: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Deal
  const addRow = () => {
    if (!formData.name || !formData.stage || !formData.value) return;

    const newRow = {
      ...formData,
      id: data.length + 1, // Auto increment ID
    };

    setData([...data, newRow]);
    setFormData({ id: '', name: '', stage: '', value: '', tags: [], closedDate: '', owner: '', probability: '', status: '' });
    setIsFormVisible(false);  // Hide the form after adding
  };

  // Edit Deal
  const editRow = (id) => {
    const row = data.find((item) => item.id === id);
    setFormData(row);
    setIsFormVisible(true);  // Show form when editing
  };

  // Update Deal
  const updateRow = () => {
    setData(data.map((item) => (item.id === formData.id ? formData : item)));
    setFormData({ id: '', name: '', stage: '', value: '', tags: [], closedDate: '', owner: '', probability: '', status: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Deal
  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Deals</h2>

      {/* Add Deal Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Deal is clicked
          setFormData({ id: '', name: '', stage: '', value: '', tags: [], closedDate: '', owner: '', probability: '', status: '' });
        }}
        className="mb-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Deal
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.id ? 'Edit Deal' : 'Add New Deal'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Deal Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Stage"
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Deal Value"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={formData.tags.join(', ')}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(tag => tag.trim()) })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.closedDate}
              onChange={(e) => setFormData({ ...formData, closedDate: e.target.value })}
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
              type="number"
              placeholder="Probability"
              value={formData.probability}
              onChange={(e) => setFormData({ ...formData, probability: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              onClick={formData.id ? updateRow : addRow}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              {formData.id ? 'Update Deal' : 'Add Deal'}
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto w-full bg-white shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full table-auto">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-left">ID</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Deal Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Stage</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Deal Value</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Tags</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Expected Close Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Owner</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Probability</th>
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
                <td className="px-6 py-4 border-t border-gray-200">{row.stage}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.value}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <ul className="flex space-x-2">
                    {row.tags.map((tag, index) => (
                      <li key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">{tag}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">{row.closedDate}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.owner}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.probability}%</td>
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

export default Deals;
