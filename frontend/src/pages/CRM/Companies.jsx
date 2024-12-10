import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Companies = () => {
  const [data, setData] = useState([
    { id: 1, name: 'TechCorp', industry: 'Software', headquarters: 'New York', employees: 150, revenue: '50M', founded: '2010-03-12', phone: '123-456-7890', email: 'contact@techcorp.com', status: 'Active' },
    { id: 2, name: 'Innovate Ltd', industry: 'Finance', headquarters: 'London', employees: 80, revenue: '30M', founded: '2005-07-20', phone: '098-765-4321', email: 'info@innovate.com', status: 'Inactive' },
    { id: 3, name: 'DesignWorks', industry: 'Design', headquarters: 'Berlin', employees: 50, revenue: '10M', founded: '2015-02-05', phone: '111-222-3333', email: 'hello@designworks.com', status: 'Active' },
    { id: 4, name: 'Cloudify', industry: 'Cloud Computing', headquarters: 'San Francisco', employees: 200, revenue: '100M', founded: '2018-09-10', phone: '555-444-3333', email: 'support@cloudify.com', status: 'Active' },
    { id: 5, name: 'DataX', industry: 'Data Science', headquarters: 'Sydney', employees: 120, revenue: '75M', founded: '2012-01-25', phone: '777-888-9999', email: 'contact@datax.com', status: 'Inactive' }
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', industry: '', headquarters: '', employees: '', revenue: '', founded: '', phone: '', email: '', status: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Row
  const addRow = () => {
    if (!formData.name || !formData.industry) return;

    const newRow = {
      ...formData,
      id: data.length + 1, // Auto increment ID
    };

    setData([...data, newRow]);
    setFormData({ id: '', name: '', industry: '', headquarters: '', employees: '', revenue: '', founded: '', phone: '', email: '', status: '' });
    setIsFormVisible(false);  // Hide the form after adding
  };

  // Edit Row
  const editRow = (id) => {
    const row = data.find((item) => item.id === id);
    setFormData(row);
    setIsFormVisible(true);  // Show form when editing
  };

  // Update Row
  const updateRow = () => {
    setData(data.map((item) => (item.id === formData.id ? formData : item)));
    setFormData({ id: '', name: '', industry: '', headquarters: '', employees: '', revenue: '', founded: '', phone: '', email: '', status: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Row
  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Companies</h2>

      {/* Add Company Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Company is clicked
          setFormData({ id: '', name: '', industry: '', headquarters: '', employees: '', revenue: '', founded: '', phone: '', email: '', status: '' });
        }}
        className="mb-6 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Company
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.id ? 'Edit Company' : 'Add New Company'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Industry"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Headquarters"
              value={formData.headquarters}
              onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Employees"
              value={formData.employees}
              onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Revenue"
              value={formData.revenue}
              onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.founded}
              onChange={(e) => setFormData({ ...formData, founded: e.target.value })}
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              onClick={formData.id ? updateRow : addRow}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
              {formData.id ? 'Update Company' : 'Add Company'}
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
              <th className="px-6 py-3 text-sm font-medium text-left">Company Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Industry</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Headquarters</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Employees</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Revenue</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Founded</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Phone</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Email</th>
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
                <td className="px-6 py-4 border-t border-gray-200">{row.industry}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.headquarters}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.employees}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.revenue}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.founded}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.phone}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.email}</td>
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

export default Companies;
