import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaFacebookMessenger, FaSkype, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const TableComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', office: 'New York', age: 30, date: '2022-01-15', phone: '123-456-7890', email: 'johndoe@example.com', tags: ['React', 'JavaScript'], rating: 4, owner: 'Alice', status: 'Active' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', office: 'London', age: 40, date: '2021-12-10', phone: '098-765-4321', email: 'janesmith@example.com', tags: ['Product', 'Leadership'], rating: 5, owner: 'Bob', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', position: 'UX Designer', office: 'Berlin', age: 35, date: '2022-06-20', phone: '111-222-3333', email: 'mikejohnson@example.com', tags: ['Design', 'UX'], rating: 3, owner: 'Charlie', status: 'Active' },
    { id: 4, name: 'Emily Davis', position: 'Data Scientist', office: 'San Francisco', age: 28, date: '2023-03-01', phone: '555-444-3333', email: 'emilydavis@example.com', tags: ['Data Science', 'Python'], rating: 4, owner: 'David', status: 'Active' },
    { id: 5, name: 'Chris Lee', position: 'DevOps Engineer', office: 'Sydney', age: 45, date: '2020-08-30', phone: '777-888-9999', email: 'chrislee@example.com', tags: ['Cloud', 'AWS'], rating: 5, owner: 'Eva', status: 'Inactive' }
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', position: '', office: '', age: '', date: '', phone: '', email: '', tags: [], rating: '', owner: '', status: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Add New Row
  const addRow = () => {
    if (!formData.name || !formData.position) return;

    const newRow = {
      ...formData,
      id: data.length + 1, // Auto increment ID
    };

    setData([...data, newRow]);
    setFormData({ id: '', name: '', position: '', office: '', age: '', date: '', phone: '', email: '', tags: [], rating: '', owner: '', status: '' });
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
    setFormData({ id: '', name: '', position: '', office: '', age: '', date: '', phone: '', email: '', tags: [], rating: '', owner: '', status: '' });
    setIsFormVisible(false);  // Hide the form after updating
  };

  // Delete Row
  const deleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className="mt-10 pb-6 text-4xl font-semibold text-gray-800">Contact</h2>

      {/* Add Contact Button */}
      <button
        onClick={() => {
          setIsFormVisible(true);  // Show form when Add Contact is clicked
          setFormData({ id: '', name: '', position: '', office: '', age: '', date: '', phone: '', email: '', tags: [], rating: '', owner: '', status: '' });
        }}
        className="mb-6 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors"
      >
        <FaPlus className="inline-block mr-2" />
        Add Contact
      </button>

      {/* Add/Edit Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">{formData.id ? 'Edit Contact' : 'Add New Contact'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Office"
              value={formData.office}
              onChange={(e) => setFormData({ ...formData, office: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={formData.tags.join(', ')}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(tag => tag.trim()) })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Rating"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Owner"
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
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
              {formData.id ? 'Update Contact' : 'Add Contact'}
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
              <th className="px-6 py-3 text-sm font-medium text-left">Name</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Position</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Office</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Age</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Phone</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Tags</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Rating</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Owner</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Contact</th>
              <th className="px-6 py-3 text-sm font-medium text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-800">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-orange-100 hover:text-gray-900 transition duration-300 ease-in-out">
                <td className="px-6 py-4 border-t border-gray-200">{row.id}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.name}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.position}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.office}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.age}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.date}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.phone}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.email}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <ul className="flex space-x-2">
                    {row.tags.map((tag, index) => (
                      <li key={index} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">{tag}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">{row.rating}</td>
                <td className="px-6 py-4 border-t border-gray-200">{row.owner}</td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <span className={`px-3 py-1 rounded-full text-xs ${row.status === 'Active' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>{row.status}</span>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <a href={`tel:${row.phone}`} className="text-blue-600 hover:text-blue-800"><FaPhone /></a>
                    <a href={`mailto:${row.email}`} className="text-blue-600 hover:text-blue-800"><FaEnvelope /></a>
                    <a href={`https://facebook.com`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                    <a href={`https://m.me`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaFacebookMessenger /></a>
                    <a href={`skype:${row.name}?chat`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaSkype /></a>
                  </div>
                </td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <button onClick={() => editRow(row.id)} className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                  <button onClick={() => deleteRow(row.id)} className="text-red-600 hover:text-red-800 ml-3"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
