import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const invoices = [
  {
    id: 'inv-001',
    clientName: 'Michael Walker',
    clientTitle: 'CEO',
    companyName: 'BrightWare Innovations',
    estimateDate: '14 Jan 2024',
    expiryDate: '15 Jan 2024',
    amount: 3000,
    status: 'Sent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  },
  {
    id: 'inv-001',
    clientName: 'Michael Walker',
    clientTitle: 'CEO',
    companyName: 'BrightWare Innovations',
    estimateDate: '14 Jan 2024',
    expiryDate: '15 Jan 2024',
    amount: 3000,
    status: 'Sent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  },
  {
    id: 'inv-001',
    clientName: 'Michael Walker',
    clientTitle: 'CEO',
    companyName: 'BrightWare Innovations',
    estimateDate: '14 Jan 2024',
    expiryDate: '15 Jan 2024',
    amount: 3000,
    status: 'Sent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  },
  {
    id: 'inv-001',
    clientName: 'Michael Walker',
    clientTitle: 'CEO',
    companyName: 'BrightWare Innovations',
    estimateDate: '14 Jan 2024',
    expiryDate: '15 Jan 2024',
    amount: 3000,
    status: 'Sent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  },
  {
    id: 'inv-001',
    clientName: 'Michael Walker',
    clientTitle: 'CEO',
    companyName: 'BrightWare Innovations',
    estimateDate: '14 Jan 2024',
    expiryDate: '15 Jan 2024',
    amount: 3000,
    status: 'Sent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  },
];

const statusColors = {
  Sent: 'bg-green-100 text-green-800',
  Expired: 'bg-red-100 text-red-800',
  Accepted: 'bg-blue-100 text-blue-800',
  Declined: 'bg-gray-100 text-gray-800'
};

export default function InvoiceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Client Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estimate Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expiry Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={invoice.avatar} alt="" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{invoice.clientName}</div>
                    <div className="text-sm text-gray-500">{invoice.clientTitle}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {invoice.companyName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {invoice.estimateDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {invoice.expiryDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${invoice.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[invoice.status]}`}>
                  {invoice.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="text-sm text-gray-700">
          Showing 1 - 10 of 10 entries
        </div>
        <div className="flex-1 flex justify-end">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
