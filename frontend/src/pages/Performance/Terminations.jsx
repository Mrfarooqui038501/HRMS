import React, { useState } from "react";

const Terminations = () => {
  // State to store terminations
  const [terminations, setTerminations] = useState([]);
  const [termination, setTermination] = useState({
    employee: "",
    terminationDate: "",
    noticeDate: "",
    reason: "",
  });

  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a termination
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTermination((prevTermination) => ({ ...prevTermination, [name]: value }));
  };

  // Add a new termination
  const handleAddTermination = () => {
    if (
      termination.employee &&
      termination.terminationDate &&
      termination.noticeDate &&
      termination.reason
    ) {
      setTerminations([...terminations, termination]);
      setTermination({
        employee: "",
        terminationDate: "",
        noticeDate: "",
        reason: "",
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a termination
  const handleDeleteTermination = (index) => {
    const updatedTerminations = terminations.filter((_, idx) => idx !== index);
    setTerminations(updatedTerminations);
  };

  // Edit a termination (populate the form with the termination data)
  const handleEditTermination = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setTermination(terminations[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Save the edited termination
  const handleSaveTermination = () => {
    if (
      termination.employee &&
      termination.terminationDate &&
      termination.noticeDate &&
      termination.reason
    ) {
      const updatedTerminations = terminations.map((t, index) =>
        index === editingIndex ? termination : t
      );
      setTerminations(updatedTerminations);
      setTermination({
        employee: "",
        terminationDate: "",
        noticeDate: "",
        reason: "",
      });
      setIsEditing(false);
      setEditingIndex(null);
      setIsFormOpen(false); // Close the form after saving
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold text-red-600 mb-6">Terminations</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setTermination({
            employee: "",
            terminationDate: "",
            noticeDate: "",
            reason: "",
          });
        }}
        className="mb-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Termination"}
      </button>

      {/* Form for Adding/Editing Terminations */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="employee"
            value={termination.employee}
            placeholder="Terminated Employee"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <input
            type="date"
            name="terminationDate"
            value={termination.terminationDate}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <input
            type="date"
            name="noticeDate"
            value={termination.noticeDate}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <textarea
            name="reason"
            value={termination.reason}
            placeholder="Reason for Termination"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <button
            onClick={isEditing ? handleSaveTermination : handleAddTermination}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Termination"}
          </button>
        </div>
      )}

      {/* Terminations Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-red-100 text-left text-red-600">
              <th className="px-4 py-2">Terminated Employee</th>
              <th className="px-4 py-2">Termination Date</th>
              <th className="px-4 py-2">Notice Date</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {terminations.map((termination, index) => (
              <tr key={index} className="border-b hover:bg-red-50">
                <td className="px-4 py-2">{termination.employee}</td>
                <td className="px-4 py-2">{termination.terminationDate}</td>
                <td className="px-4 py-2">{termination.noticeDate}</td>
                <td className="px-4 py-2">{termination.reason}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditTermination(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTermination(index)}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
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

export default Terminations;
