import React from "react";

const PerformanceIndicator = () => {
  const employeePerformance = [
    { month: "January", score: 85 },
    { month: "February", score: 90 },
    { month: "March", score: 88 },
  ];

  const teamPerformance = [
    { employee: "John Doe", score: 92 },
    { employee: "Jane Smith", score: 88 },
    { employee: "Mark Wilson", score: 85 },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 min-h-screen mt-10">

      {/* Monthly Performance */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">My Monthly Performance</h2>
        <ul className="space-y-4">
          {employeePerformance.map(({ month, score }) => (
            <li
              key={month}
              className="flex justify-between p-4 bg-orange-200 hover:bg-orange-300 rounded-lg shadow-lg transition-all"
            >
              <span className="text-orange-700">{month}</span>
              <span className="font-semibold text-orange-900">{score}%</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Performance */}
      <section>
        <h2 className="text-3xl font-bold text-orange-800 mb-6">Team Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamPerformance.map(({ employee, score }) => (
            <div
              key={employee}
              className="p-6 bg-orange-100 hover:bg-orange-200 rounded-lg shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-orange-800">{employee}</h3>
              <p className="text-orange-700">Performance Score: <span className="font-bold text-orange-900">{score}%</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PerformanceIndicator;
