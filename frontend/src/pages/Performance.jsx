import React from "react";

const Performance = () => {
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
    <div>
      <h1 className="text-3xl font-bold mb-6">Performance</h1>

      {/* Monthly Performance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Monthly Performance</h2>
        <ul className="space-y-2">
          {employeePerformance.map(({ month, score }) => (
            <li
              key={month}
              className="flex justify-between p-4 bg-blue-100 rounded-lg shadow"
            >
              <span>{month}</span>
              <span className="font-bold">{score}%</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Performance */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Team Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {teamPerformance.map(({ employee, score }) => (
            <div
              key={employee}
              className="p-4 bg-green-100 rounded-lg shadow-md"
            >
              <h3 className="font-bold">{employee}</h3>
              <p>Performance Score: {score}%</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Performance;