import React, { useState } from 'react';
import { 
  DollarSignIcon, 
  TrendingUpIcon, 
  TrendingDownIcon 
} from 'lucide-react';

const Sale = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const salesData = {
    2024: {
      11: [
        { id: 1, product: 'Laptop', revenue: 1500, cost: 1200 },
        { id: 2, product: 'Phone', revenue: 800, cost: 600 },
        { id: 3, product: 'Headphones', revenue: 200, cost: 250 },
        { id: 4, product: 'Tablet', revenue: 1000, cost: 900 },
      ],
      12: [
        { id: 1, product: 'Monitor', revenue: 400, cost: 300 },
        { id: 2, product: 'Keyboard', revenue: 100, cost: 50 },
      ],
    },
  };

  const getSalesForMonth = (year, month) => {
    return salesData[year]?.[month] || [];
  };

  const calculateProfitAndLoss = (sales) => {
    let totalProfit = 0;
    let totalLoss = 0;

    sales.forEach(({ revenue, cost }) => {
      const difference = revenue - cost;
      if (difference > 0) {
        totalProfit += difference;
      } else {
        totalLoss += Math.abs(difference);
      }
    });

    return { totalProfit, totalLoss };
  };

  const currentSales = getSalesForMonth(selectedYear, selectedMonth);
  const { totalProfit, totalLoss } = calculateProfitAndLoss(currentSales);

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <DollarSignIcon className="mr-3 text-green-600" />
            Sales Overview
          </h1>
          <div className="flex space-x-4">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="border rounded px-3 py-2"
            >
              {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
              className="border rounded px-3 py-2"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month - 1).toLocaleString('default', {
                    month: 'long',
                  })}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          {currentSales.length > 0 ? (
            <>
              <h2 className="text-xl font-bold mb-4">
                Sales Details for {new Date(selectedYear, selectedMonth - 1).toLocaleString('default', { month: 'long' })}, {selectedYear}
              </h2>
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Product</th>
                    <th className="border px-4 py-2">Revenue</th>
                    <th className="border px-4 py-2">Cost</th>
                    <th className="border px-4 py-2">Profit/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSales.map(({ id, product, revenue, cost }) => (
                    <tr key={id}>
                      <td className="border px-4 py-2">{product}</td>
                      <td className="border px-4 py-2">${revenue.toFixed(2)}</td>
                      <td className="border px-4 py-2">${cost.toFixed(2)}</td>
                      <td
                        className={`border px-4 py-2 ${
                          revenue - cost > 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        ${Math.abs(revenue - cost).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-gray-600">No sales data available for the selected month and year.</p>
          )}
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-gray-700">Summary</h2>
          <p className="text-green-600 flex items-center">
            <TrendingUpIcon className="mr-2" />
            Total Profit: ${totalProfit.toFixed(2)}
          </p>
          <p className="text-red-600 flex items-center">
            <TrendingDownIcon className="mr-2" />
            Total Loss: ${totalLoss.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
