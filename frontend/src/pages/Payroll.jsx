import React, { useState } from 'react';

const Payroll = () => {
  const payrollData = {
    2024: {
      11: '$4,500 - November 2024',
      10: '$4,500 - October 2024',
    },
    2023: {
      12: '$4,300 - December 2023',
      11: '$4,300 - November 2023',
    },
  };

  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(11);

  const generateSalarySlip = (year, month) => payrollData[year]?.[month] || 'No Data Available';

  const handleDownload = () => {
    const salarySlip = generateSalarySlip(selectedYear, selectedMonth);
    const blob = new Blob([salarySlip], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SalarySlip_${selectedYear}_${selectedMonth}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const availableYears = Object.keys(payrollData);
  const availableMonths = Array.from({ length: 12 }, (_, i) => i + 1); // 1 to 12

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Payroll</h1>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className="border p-2 rounded-md w-full"
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="border p-2 rounded-md w-full"
        >
          {availableMonths.map((month) => (
            <option key={month} value={month}>
              {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-gray-100 p-4 rounded-md shadow-inner mb-4">
        <h2 className="text-lg font-semibold">Salary Slip:</h2>
        <p className="text-gray-800">{generateSalarySlip(selectedYear, selectedMonth)}</p>
      </div>
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Download Salary Slip
      </button>
    </div>
  );
};

export default Payroll;
