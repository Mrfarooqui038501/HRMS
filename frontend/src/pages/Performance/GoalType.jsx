import React, { useState } from "react";

const GoalType = () => {
  // State to store goals
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({
    goalType: "",
    description: "",
    status: "", // Status will now be a dropdown (Active/Inactive)
  });

  // State to manage dropdown visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a goal
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prevGoal) => ({ ...prevGoal, [name]: value }));
  };

  // Function to add a goal
  const handleAddGoal = () => {
    if (goal.goalType && goal.description && goal.status) {
      setGoals([...goals, goal]);
      setGoal({
        goalType: "",
        description: "",
        status: "", // Reset status after adding
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to delete a goal
  const handleDeleteGoal = (index) => {
    const updatedGoals = goals.filter((_, idx) => idx !== index);
    setGoals(updatedGoals);
  };

  // Function to edit a goal (populate the form with the goal's data)
  const handleEditGoal = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setGoal(goals[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Function to save the edited goal
  const handleSaveGoal = () => {
    if (goal.goalType && goal.description && goal.status) {
      const updatedGoals = goals.map((g, index) =>
        index === editingIndex ? goal : g
      );
      setGoals(updatedGoals);
      setGoal({
        goalType: "",
        description: "",
        status: "", // Reset status after saving
      });
      setIsEditing(false);
      setEditingIndex(null);
      setIsFormOpen(false); // Close the form after saving
    } else {
      alert("Please fill in all fields.");
    }
  };

  // CSS classes for blinking status lights
  const statusLightClass = (status) => {
    if (status === "Active") {
      return "bg-green-500 animate-blink"; // Green for Active with blinking animation
    }
    if (status === "Inactive") {
      return "bg-red-500 animate-blink"; // Red for Inactive with blinking animation
    }
    return "bg-gray-400"; // Default (no status)
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold text-orange-600 mb-6">Goal Type</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setGoal({
            goalType: "",
            description: "",
            status: "", // Reset status field
          });
        }}
        className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Goal"}
      </button>

      {/* Form for Adding/Editing Goals */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="goalType"
            value={goal.goalType}
            placeholder="Goal Type"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="description"
            value={goal.description}
            placeholder="Description"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          
          {/* Dropdown for status (Active/Inactive) */}
          <select
            name="status"
            value={goal.status}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            onClick={isEditing ? handleSaveGoal : handleAddGoal}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Goal"}
          </button>
        </div>
      )}

      {/* Goals Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-orange-100 text-left text-orange-600">
              <th className="px-4 py-2">Goal Type</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={index} className="border-b hover:bg-orange-50">
                <td className="px-4 py-2">{goal.goalType}</td>
                <td className="px-4 py-2">{goal.description}</td>
                <td className="px-4 py-2 flex items-center">
                  <span className="mr-2">{goal.status}</span>
                  <div className={`w-3 h-3 rounded-full ${statusLightClass(goal.status)}`} />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditGoal(index)}
                    className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteGoal(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoalType;

