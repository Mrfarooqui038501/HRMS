import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function InvoiceFilters() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 p-4 bg-white border-b">
      <div className="flex-1 flex flex-wrap gap-2">
        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm">
          11/29/2024 - 12/05/2024
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm">
          $0.00 - $00
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm">
          Select Status
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm">
          Sort By: Last 7 Days
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </div>
  );
}