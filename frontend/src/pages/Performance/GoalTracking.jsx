import React, { useState, useEffect } from "react";
import { goalService } from "../../api/axios";

const GoalTracking = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({
    goalType: "",
    subject: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingGoalId, setEditingGoalId] = useState(null);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const data = await goalService.getAllGoals();
      setGoals(data);
    } catch (error) {
      console.error("Error fetching goals:", error);
      alert("Failed to fetch goals");
    }
  };

  const handleAddGoal = async () => {
    try {
      if (Object.values(goal).some(field => field === '')) {
        alert("Please fill in all required fields.");
        return;
      }
      
      await goalService.createGoal(goal);
      fetchGoals();
      resetForm();
      alert("Goal added successfully!");
    } catch (error) {
      console.error("Error adding goal:", error);
      alert(error.response?.data?.message || "Failed to add goal");
    }
  };

  const handleEditGoal = (selectedGoal) => {
    setIsEditing(true);
    setEditingGoalId(selectedGoal._id);
    setGoal({
      goalType: selectedGoal.goalType,
      subject: selectedGoal.subject,
      startDate: new Date(selectedGoal.startDate).toISOString().split('T')[0],
      endDate: new Date(selectedGoal.endDate).toISOString().split('T')[0],
      description: selectedGoal.description,
    });
    setIsFormOpen(true);
  };

  const handleSaveGoal = async () => {
    try {
      if (Object.values(goal).some(field => field === '')) {
        alert("Please fill in all required fields.");
        return;
      }

      await goalService.updateGoal(editingGoalId, goal);
      fetchGoals();
      resetForm();
      alert("Goal updated successfully!");
    } catch (error) {
      console.error("Error saving goal:", error);
      alert("Failed to save goal");
    }
  };

  const handleDeleteGoal = async (goalId) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      try {
        await goalService.deleteGoal(goalId);
        fetchGoals();
        alert("Goal deleted successfully!");
      } catch (error) {
        console.error("Error deleting goal:", error);
        alert("Failed to delete goal");
      }
    }
  };

  const resetForm = () => {
    setGoal({
      goalType: "",
      subject: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
    setEditingGoalId(null);
    setIsFormOpen(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold text-orange-600 mb-6">Goal Tracking</h1>

      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          resetForm();
        }}
        className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Goal"}
      </button>

      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            placeholder="Goal Type"
            value={goal.goalType}
            onChange={(e) => setGoal({...goal, goalType: e.target.value})}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={goal.subject}
            onChange={(e) => setGoal({...goal, subject: e.target.value})}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            value={goal.startDate}
            onChange={(e) => setGoal({...goal, startDate: e.target.value})}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            value={goal.endDate}
            onChange={(e) => setGoal({...goal, endDate: e.target.value})}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={goal.description}
            onChange={(e) => setGoal({...goal, description: e.target.value})}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            onClick={isEditing ? handleSaveGoal : handleAddGoal}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
          >
            {isEditing ? "Update Goal" : "Add Goal"}
          </button>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-orange-100">
              <th className="p-2">Goal Type</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">End Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <tr key={goal._id} className="border-b">
                <td className="p-2">{goal.goalType}</td>
                <td className="p-2">{goal.subject}</td>
                <td className="p-2">{formatDate(goal.startDate)}</td>
                <td className="p-2">{formatDate(goal.endDate)}</td>
                <td className="p-2">{goal.description}</td>
                <td className="p-2">
                  <button 
                    onClick={() => handleEditGoal(goal)}
                    className="bg-orange-500 text-white px-2 py-1 rounded mr-2 hover:bg-orange-600"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteGoal(goal._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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

export default GoalTracking;