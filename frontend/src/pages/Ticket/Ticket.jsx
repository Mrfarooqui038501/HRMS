import React from 'react';

const TicketDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
          Add Ticket
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-gray-500 font-medium">New Tickets</h3>
          <div className="text-3xl font-bold">112</div>
          <div className="text-gray-500">+10%</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-gray-500 font-medium">Solved Tickets</h3>
          <div className="text-3xl font-bold">70</div>
          <div className="text-green-500">+12.5%</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-gray-500 font-medium">Open Tickets</h3>
          <div className="text-3xl font-bold">100</div>
          <div className="text-gray-500">-2.8%</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-gray-500 font-medium">Pending Tickets</h3>
          <div className="text-3xl font-bold">125</div>
          <div className="text-red-500">-75%</div>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border text-left">#</th>
              <th className="p-2 border text-left">Ticket Id</th>
              <th className="p-2 border text-left">Ticket Subject</th>
              <th className="p-2 border text-left">Assigned Staff</th>
              <th className="p-2 border text-left">Created Date</th>
              <th className="p-2 border text-left">Last Reply</th>
              <th className="p-2 border text-left">Priority</th>
              <th className="p-2 border text-left">Status</th>
              <th className="p-2 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">1</td>
              <td className="p-2 border">#TKT-0001</td>
              <td className="p-2 border">Laptop Issue</td>
              <td className="p-2 border">John Smith</td>
              <td className="p-2 border">5 Jan 2019 07:21 AM</td>
              <td className="p-2 border">5 Jan 2019 11:2 AM</td>
              <td className="p-2 border text-red-500">High</td>
              <td className="p-2 border text-red-500">New</td>
              <td className="p-2 border flex justify-end">
                {/* Actions */}
              </td>
            </tr>
            <tr>
              <td className="p-2 border">2</td>
              <td className="p-2 border">#TKT-0001</td>
              <td className="p-2 border">Internet Issue</td>
              <td className="p-2 border">Catherine Manseau</td>
              <td className="p-2 border">5 Jan 2019 07:21 AM</td>
              <td className="p-2 border">5 Jan 2019 11:2 AM</td>
              <td className="p-2 border text-yellow-500">Medium</td>
              <td className="p-2 border text-blue-500">Reopened</td>
              <td className="p-2 border flex justify-end">
                {/* Actions */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketDashboard;