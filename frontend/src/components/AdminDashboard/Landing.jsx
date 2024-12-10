import React from "react";

const Box = ({ icon, number, title }) => (
  <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition ease-in-out duration-300">
    <div className="text-4xl">{icon}</div>
    <div className="text-2xl font-bold mt-2">{number}</div>
    <div className="text-lg text-gray-600 mt-1">{title}</div>
  </div>
);

const Landing = () => {
  return (
    <div className="bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Box icon="📈" number="5" title="Growth" />
        <Box icon="💡" number="3" title="Ideas" />
        <Box icon="📊" number="7" title="Reports" />
        <Box icon="🔔" number="9" title="Notifications" />
      </div>
    </div>
  );
};

export default Landing;
