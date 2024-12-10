import React from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {
  // Sample data for Invoices
  const invoices = [
    { id: 1, client: 'John Doe', dueDate: '2024-12-01', total: '$500', status: 'Pending' },
    { id: 2, client: 'Jane Smith', dueDate: '2024-11-28', total: '$300', status: 'Paid' },
    // Add more invoices as needed
  ];

  // Sample data for Payments
  const payments = [
    { id: 1, client: 'John Doe', paymentType: 'Credit Card', paidDate: '2024-11-15', paidAmount: '$500' },
    { id: 2, client: 'Jane Smith', paymentType: 'PayPal', paidDate: '2024-11-20', paidAmount: '$300' },
    // Add more payments as needed
  ];

  return (
    <div className="bg-gray-50 p-8">

      {/* Main Grid Layout for Invoices and Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Invoice Box */}
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Invoices</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Client</th>
                  <th className="py-3 px-6 text-left">Due Date</th>
                  <th className="py-3 px-6 text-left">Total</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t hover:bg-gray-100 transition-all duration-300 ease-in-out">
                    <td className="py-3 px-6">{invoice.id}</td>
                    <td className="py-3 px-6 font-medium">{invoice.client}</td>
                    <td className="py-3 px-6">{invoice.dueDate}</td>
                    <td className="py-3 px-6">{invoice.total}</td>
                    <td className="py-3 px-6">
                      <span className={`px-4 py-2 rounded-full ${invoice.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payments Box */}
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Payments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Client</th>
                  <th className="py-3 px-6 text-left">Payment Type</th>
                  <th className="py-3 px-6 text-left">Paid Date</th>
                  <th className="py-3 px-6 text-left">Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-t hover:bg-gray-100 transition-all duration-300 ease-in-out">
                    <td className="py-3 px-6">{payment.id}</td>
                    <td className="py-3 px-6 font-medium">{payment.client}</td>
                    <td className="py-3 px-6">{payment.paymentType}</td>
                    <td className="py-3 px-6">{payment.paidDate}</td>
                    <td className="py-3 px-6">{payment.paidAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Action buttons */}
      <div className="flex justify-between mt-8">
        <Link to= '/invoice' className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 ease-in-out">
          View All Invoices
        </Link>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-200 ease-in-out">
          View All Payments
        </button>
      </div>
    </div>
  );
};

export default Invoice;
