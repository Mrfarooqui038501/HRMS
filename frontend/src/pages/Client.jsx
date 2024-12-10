import React from "react";

const Client = () => {
  const currentClients = [
    { id: 1, name: "Tech Solutions Ltd", industry: "IT Services" },
    { id: 2, name: "Green Energy Corp", industry: "Renewable Energy" },
  ];

  const pastClients = [
    { id: 1, name: "Retail World", industry: "Retail" },
    { id: 2, name: "Finance Matters", industry: "Finance" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Clients</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentClients.map((client) => (
              <div
                key={client.id}
                className="p-4 bg-blue-100 border rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold">{client.name}</h3>
                <p className="text-gray-700">Industry: {client.industry}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Past Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastClients.map((client) => (
              <div
                key={client.id}
                className="p-4 bg-green-100 border rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold">{client.name}</h3>
                <p className="text-gray-700">Industry: {client.industry}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Client;