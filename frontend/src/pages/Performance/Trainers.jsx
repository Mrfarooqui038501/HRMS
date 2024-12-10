import React, { useState } from "react";

const Trainers = () => {
  // State to store trainers
  const [trainers, setTrainers] = useState([]);
  const [trainer, setTrainer] = useState({
    name: "",
    email: "",
    phone: "",
    status: "", // Active/Inactive
    description: "",
  });

  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a trainer
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer((prevTrainer) => ({ ...prevTrainer, [name]: value }));
  };

  // Add a new trainer
  const handleAddTrainer = () => {
    if (
      trainer.name &&
      trainer.email &&
      trainer.phone &&
      trainer.status &&
      trainer.description
    ) {
      setTrainers([...trainers, trainer]);
      setTrainer({
        name: "",
        email: "",
        phone: "",
        status: "",
        description: "",
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a trainer
  const handleDeleteTrainer = (index) => {
    const updatedTrainers = trainers.filter((_, idx) => idx !== index);
    setTrainers(updatedTrainers);
  };

  // Edit a trainer (populate the form with the trainer data)
  const handleEditTrainer = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setTrainer(trainers[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Save the edited trainer
  const handleSaveTrainer = () => {
    if (
      trainer.name &&
      trainer.email &&
      trainer.phone &&
      trainer.status &&
      trainer.description
    ) {
      const updatedTrainers = trainers.map((t, index) =>
        index === editingIndex ? trainer : t
      );
      setTrainers(updatedTrainers);
      setTrainer({
        name: "",
        email: "",
        phone: "",
        status: "",
        description: "",
      });
      setIsEditing(false);
      setEditingIndex(null);
      setIsFormOpen(false); // Close the form after saving
    } else {
      alert("Please fill in all fields.");
    }
  };

  // CSS classes for status lights
  const statusLightClass = (status) => {
    if (status === "Active") {
      return "bg-green-500 animate-blink"; // Green for Active
    }
    if (status === "Inactive") {
      return "bg-red-500 animate-blink"; // Red for Inactive
    }
    return "bg-gray-400"; // Default (no status)
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold text-orange-600 mb-6">Trainers</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setTrainer({
            name: "",
            email: "",
            phone: "",
            status: "",
            description: "",
          });
        }}
        className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Trainer"}
      </button>

      {/* Form for Adding/Editing Trainers */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="name"
            value={trainer.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            value={trainer.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="phone"
            value={trainer.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="description"
            value={trainer.description}
            placeholder="Description"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          {/* Dropdown for status (Active/Inactive) */}
          <select
            name="status"
            value={trainer.status}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            onClick={isEditing ? handleSaveTrainer : handleAddTrainer}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Trainer"}
          </button>
        </div>
      )}

      {/* Trainers Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-orange-100 text-left text-orange-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer, index) => (
              <tr key={index} className="border-b hover:bg-orange-50">
                <td className="px-4 py-2">{trainer.name}</td>
                <td className="px-4 py-2">{trainer.email}</td>
                <td className="px-4 py-2">{trainer.phone}</td>
                <td className="px-4 py-2 flex items-center">
                  <span className="mr-2">{trainer.status}</span>
                  <div
                    className={`w-3 h-3 rounded-full ${statusLightClass(
                      trainer.status
                    )}`}
                  />
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditTrainer(index)}
                      className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTrainer(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainers;
