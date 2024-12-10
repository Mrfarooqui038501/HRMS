import React from 'react';
import InvoiceHeader from '../components/Invoice/InvoiceHeader';
import InvoiceFilters from '../components/Invoice/InvoiceFilters';
import InvoiceTable from '../components/Invoice/InvoiceTable';


function Invoice() {
  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto">
        <InvoiceHeader />
        <div className="mt-4 bg-white shadow rounded-lg">
          <InvoiceFilters />
          <InvoiceTable />
        </div>
      </div>
    </div>
  );
}

export default Invoice;