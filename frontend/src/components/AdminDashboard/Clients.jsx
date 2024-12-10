// src/components/Dashboard.js
import React from 'react';

const clientsData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Mark Johnson', email: 'mark@example.com', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Inactive' },
  { id: 5, name: 'Bob Green', email: 'bob@example.com', status: 'Active' },
];

const projectsData = [
  { id: 1, name: 'Project A', progress: '80%' },
  { id: 2, name: 'Project B', progress: '45%' },
  { id: 3, name: 'Project C', progress: '60%' },
  { id: 4, name: 'Project D', progress: '25%' },
  { id: 5, name: 'Project E', progress: '90%' },
];

const Clients = () => {
  return (
    <div className="bg-gray-50 py-8 px-6">

      {/* Main Grid Layout for Clients and Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Clients Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Clients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-gray-700">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {clientsData.map(client => (
                  <tr key={client.id} className="border-t hover:bg-gray-100 transition-all duration-300 ease-in-out">
                    <td className="px-6 py-3">{client.name}</td>
                    <td className="px-6 py-3">{client.email}</td>
                    <td className="px-6 py-3">
                      <span className={`px-3 py-1 rounded-full ${client.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <button className="text-blue-500 hover:text-blue-700 transition duration-200">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-right">
            <a href="#" className="text-blue-600 hover:underline">View All Clients</a>
          </div>
        </div>

        {/* Recent Projects Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Projects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-gray-700">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Project Name</th>
                  <th className="px-6 py-3 text-left">Progress</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map(project => (
                  <tr key={project.id} className="border-t hover:bg-gray-100 transition-all duration-300 ease-in-out">
                    <td className="px-6 py-3">{project.name}</td>
                    <td className="px-6 py-3">{project.progress}</td>
                    <td className="px-6 py-3">
                      <button className="text-blue-500 hover:text-blue-700 transition duration-200">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-right">
            <a href="#" className="text-blue-600 hover:underline">View All Projects</a>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Clients;
