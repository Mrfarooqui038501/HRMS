import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Leads = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', company: 'TechCorp', phone: '555-1234', email: 'john.doe@techcorp.com', status: 'New', createdDate: '2024-11-01', owner: 'Alice' },
    { id: 2, name: 'Jane Smith', company: 'Innovate Ltd', phone: '555-5678', email: 'jane.smith@innovate.com', status: 'Contacted', createdDate: '2024-11-05', owner: 'Bob' },
    { id: 3, name: 'Tom Johnson', company: 'Cloudify', phone: '555-8765', email: 'tom.johnson@cloudify.com', status: 'Qualified', createdDate: '2024-11-08', owner: 'Charlie' },
    { id: 4, name: 'Alice Brown', company: 'DesignWorks', phone: '555-1122', email: 'alice.brown@designworks.com', status: 'New', createdDate: '2024-11-10', owner: 'David' },
    { id: 5, name: 'Eva Green', company: 'DataX', phone: '555-3344', email: 'eva.green@datx.com', status: 'Contacted', createdDate: '2024-11-12', owner: 'Eva' },
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', company: '', phone: '', email: '', status: '', createdDate: '', owner: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Lead
  const addRow = () => {
    if (!formData.name || !formData.company || !formData.phone || !formData.email) return;

    const newRow = {
      ...formData,
      id: data.length + 1, // Auto increment ID
    };

    setData([...data, newRow]);
    setFormData({ id: '', name: '', company: '', phone: '', email: '', status: '', createdDate: '', owner: '' });
    setIsFormVisible(false);  // Hide the form after adding
  };

  // Edit Lead
  const editRow = (id) => {
    const row = data.find((item) => item.id === id);
    setFormData(row);
    setIsFormVisible(true);  // Show form when editing
  };

  // Update Lead
  const updateRow = () => {
    setData(data.map((item) => (item.id === formData.id ? formData : item)));
    setFormData({ id: '', name: '', company: '', phone: '', email: '', status: '', createdDate: '', owner: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Lead
  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Leads</h2>

      {/* Add Lead Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Lead is clicked
          setFormData({ id: '', name: '', company: '', phone: '', email: '', status: '', createdDate: '', owner: '' });
        }}
        className="mb-6 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Lead
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.id ? 'Edit Lead' : 'Add New Lead'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Lead Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
            </select>
            <input
              type="date"
              value={formData.createdDate}
              onChange={(e) => setFormData({ ...formData, createdDate: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Lead Owner"
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={formData.id ? updateRow : addRow}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              {formData.id ? 'Update Lead' : 'Add Lead'}
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
              <th className="px-6 py-3 text-sm font-medium text-left">Lead Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Company Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Phone</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Lead Status</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Created Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Lead Owner</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-800">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-orange-100 hover:text-gray-900 transition duration-300 ease-in-out">
                <td className="px-6 py-4 border-t border-gray-200">{row.id}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.name}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.company}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.phone}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.email}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.status}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.createdDate}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.owner}</td>
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

export default Leads;
