import React from 'react';
import { Search, Download } from 'lucide-react';

export default function InvoiceHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>HR</span>
          <span className="mx-2">•</span>
          <span>Invoices</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
          Add Invoice
        </button>
      </div>
    </div>
  );
}