import React, { useState } from "react";

const Resignations = () => {
  // State to store resignations
  const [resignations, setResignations] = useState([]);
  const [resignation, setResignation] = useState({
    employee: "",
    resignationDate: "",
    noticeDate: "",
    reason: "",
  });

  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a resignation
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResignation((prevResignation) => ({ ...prevResignation, [name]: value }));
  };

  // Add a new resignation
  const handleAddResignation = () => {
    if (
      resignation.employee &&
      resignation.resignationDate &&
      resignation.noticeDate &&
      resignation.reason
    ) {
      setResignations([...resignations, resignation]);
      setResignation({
        employee: "",
        resignationDate: "",
        noticeDate: "",
        reason: "",
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a resignation
  const handleDeleteResignation = (index) => {
    const updatedResignations = resignations.filter((_, idx) => idx !== index);
    setResignations(updatedResignations);
  };

  // Edit a resignation (populate the form with the resignation data)
  const handleEditResignation = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setResignation(resignations[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Save the edited resignation
  const handleSaveResignation = () => {
    if (
      resignation.employee &&
      resignation.resignationDate &&
      resignation.noticeDate &&
      resignation.reason
    ) {
      const updatedResignations = resignations.map((r, index) =>
        index === editingIndex ? resignation : r
      );
      setResignations(updatedResignations);
      setResignation({
        employee: "",
        resignationDate: "",
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
      <h1 className="text-3xl font-semibold text-red-600 mb-6">Resignations</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setResignation({
            employee: "",
            resignationDate: "",
            noticeDate: "",
            reason: "",
          });
        }}
        className="mb-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Resignation"}
      </button>

      {/* Form for Adding/Editing Resignations */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="employee"
            value={resignation.employee}
            placeholder="Resigned Employee"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <input
            type="date"
            name="resignationDate"
            value={resignation.resignationDate}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <input
            type="date"
            name="noticeDate"
            value={resignation.noticeDate}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <textarea
            name="reason"
            value={resignation.reason}
            placeholder="Reason for Resignation"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          <button
            onClick={isEditing ? handleSaveResignation : handleAddResignation}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Resignation"}
          </button>
        </div>
      )}

      {/* Resignations Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-red-100 text-left text-red-600">
              <th className="px-4 py-2">Resigned Employee</th>
              <th className="px-4 py-2">Resignation Date</th>
              <th className="px-4 py-2">Notice Date</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resignations.map((resignation, index) => (
              <tr key={index} className="border-b hover:bg-red-50">
                <td className="px-4 py-2">{resignation.employee}</td>
                <td className="px-4 py-2">{resignation.resignationDate}</td>
                <td className="px-4 py-2">{resignation.noticeDate}</td>
                <td className="px-4 py-2">{resignation.reason}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditResignation(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteResignation(index)}
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

export default Resignations;
