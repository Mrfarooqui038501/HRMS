import React, { useState } from 'react';

const ExpensesPage = () => {
  // Sample data for employees, earnings, and expenses
  const employees = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Mark Johnson' },
  ];

  const newEmployees = 2; // Number of new employees
  const totalEmployees = employees.length; // Total employees

  const earnings = 5000;  // Example total earnings
  const expenses = 3000;  // Example total expenses
  const profit = earnings - expenses;

  // Sample data for percentage increase and progress
  const earningsGrowthPercentage = 20; // 20% growth
  const expensesGrowthPercentage = 10; // 10% growth

  const progressColor = (percentage) => {
    if (percentage < 0) return 'bg-red-500'; // Negative progress (loss)
    if (percentage === 0) return 'bg-yellow-400'; // No change
    return 'bg-green-500'; // Positive progress (growth)
  };

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Expenses Management</h1> */}

      {/* Box Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Employees Box */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-xl flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-60"></div>
          <div className="flex justify-between items-center mb-4 z-10 relative">
            <h2 className="text-2xl font-semibold">New Employees</h2>
            <span className={`${newEmployees > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {newEmployees > 0 ? `+${newEmployees}` : `${newEmployees}%`}
            </span>
          </div>
          <p className="text-lg font-semibold mb-4 z-10 relative">Total New Employees: {newEmployees}</p>

          {/* Progress Bar */}
          <div className="mb-4 z-10 relative">
            <p className="text-sm">Progress</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className={`h-2 ${progressColor(earningsGrowthPercentage)} rounded-full`} style={{ width: `${earningsGrowthPercentage}%` }}></div>
            </div>
          </div>

          <p className="text-sm z-10 relative">Overall Employees: {totalEmployees}</p>
        </div>

        {/* Earnings Box */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-xl flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-400 opacity-60"></div>
          <div className="flex justify-between items-center mb-4 z-10 relative">
            <h2 className="text-2xl font-semibold">Earnings</h2>
            <span className={`${earningsGrowthPercentage > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {earningsGrowthPercentage}%</span>
          </div>
          <p className="text-lg font-semibold mb-4 z-10 relative">Total Earnings: ${earnings.toFixed(2)}</p>

          {/* Earnings Progress Bar */}
          <div className="mb-4 z-10 relative">
            <p className="text-sm">Growth Progress</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className={`h-2 ${progressColor(earningsGrowthPercentage)} rounded-full`} style={{ width: `${earningsGrowthPercentage}%` }}></div>
            </div>
          </div>

          <p className="text-sm z-10 relative">Earnings Growth: {earningsGrowthPercentage}%</p>
        </div>

        {/* Expenses Box */}
        <div className="bg-gradient-to-r from-red-400 to-yellow-500 text-white p-6 rounded-lg shadow-xl flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-yellow-400 opacity-60"></div>
          <div className="flex justify-between items-center mb-4 z-10 relative">
            <h2 className="text-2xl font-semibold">Expenses</h2>
            <span className={`${expensesGrowthPercentage > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {expensesGrowthPercentage}%</span>
          </div>
          <p className="text-lg font-semibold mb-4 z-10 relative">Total Expenses: ${expenses.toFixed(2)}</p>

          {/* Expenses Progress Bar */}
          <div className="mb-4 z-10 relative">
            <p className="text-sm">Growth Progress</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className={`h-2 ${progressColor(expensesGrowthPercentage)} rounded-full`} style={{ width: `${expensesGrowthPercentage}%` }}></div>
            </div>
          </div>

          <p className="text-sm z-10 relative">Expenses Growth: {expensesGrowthPercentage}%</p>
        </div>

        {/* Profit Box */}
        <div className="bg-gradient-to-r from-indigo-500 to-pink-600 text-white p-6 rounded-lg shadow-xl flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-pink-500 opacity-60"></div>
          <div className="flex justify-between items-center mb-4 z-10 relative">
            <h2 className="text-2xl font-semibold">Profit</h2>
            <span className={`${profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {profit >= 0 ? `+${profit.toFixed(2)}` : `-${Math.abs(profit).toFixed(2)}`}
            </span>
          </div>
          <p className="text-lg font-semibold mb-4 z-10 relative">Profit: ${profit.toFixed(2)}</p>

          {/* Profit Progress Bar */}
          <div className="mb-4 z-10 relative">
            <p className="text-sm">Profit Margin</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className={`h-2 ${progressColor(profit)} rounded-full`} style={{ width: `${(profit / earnings) * 100}%` }}></div>
            </div>
          </div>

          <p className="text-sm z-10 relative">Profit Margin: {((profit / earnings) * 100).toFixed(2)}%</p>
        </div>

      </div>
    </div>
  );
};

export default ExpensesPage;
