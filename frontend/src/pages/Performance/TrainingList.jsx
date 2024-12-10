import React, { useState } from "react";

const TrainingList = () => {
  // State to store training data
  const [trainings, setTrainings] = useState([]);
  const [training, setTraining] = useState({
    trainingType: "",
    trainer: "",
    employee: "",
    duration: "",
    description: "",
    cost: "",
    status: "",
  });

  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a training
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTraining((prevTraining) => ({ ...prevTraining, [name]: value }));
  };

  // Function to add a new training
  const handleAddTraining = () => {
    if (
      training.trainingType &&
      training.trainer &&
      training.employee &&
      training.duration &&
      training.description &&
      training.cost &&
      training.status
    ) {
      setTrainings([...trainings, training]);
      setTraining({
        trainingType: "",
        trainer: "",
        employee: "",
        duration: "",
        description: "",
        cost: "",
        status: "",
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to delete a training
  const handleDeleteTraining = (index) => {
    const updatedTrainings = trainings.filter((_, idx) => idx !== index);
    setTrainings(updatedTrainings);
  };

  // Function to edit a training (populate the form with the training data)
  const handleEditTraining = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setTraining(trainings[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Function to save the edited training
  const handleSaveTraining = () => {
    if (
      training.trainingType &&
      training.trainer &&
      training.employee &&
      training.duration &&
      training.description &&
      training.cost &&
      training.status
    ) {
      const updatedTrainings = trainings.map((t, index) =>
        index === editingIndex ? training : t
      );
      setTrainings(updatedTrainings);
      setTraining({
        trainingType: "",
        trainer: "",
        employee: "",
        duration: "",
        description: "",
        cost: "",
        status: "",
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
      <h1 className="text-3xl font-semibold text-orange-600 mb-6">Training Tracking</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setTraining({
            trainingType: "",
            trainer: "",
            employee: "",
            duration: "",
            description: "",
            cost: "",
            status: "",
          });
        }}
        className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Training"}
      </button>

      {/* Form for Adding/Editing Training */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="trainingType"
            value={training.trainingType}
            placeholder="Training Type"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="trainer"
            value={training.trainer}
            placeholder="Trainer"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="employee"
            value={training.employee}
            placeholder="Employee"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="duration"
            value={training.duration}
            placeholder="Duration"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="description"
            value={training.description}
            placeholder="Description"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="number"
            name="cost"
            value={training.cost}
            placeholder="Cost"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <select
            name="status"
            value={training.status}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            onClick={isEditing ? handleSaveTraining : handleAddTraining}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Training"}
          </button>
        </div>
      )}

      {/* Trainings Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-orange-100 text-left text-orange-600">
              <th className="px-4 py-2">Training Type</th>
              <th className="px-4 py-2">Trainer</th>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Cost</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training, index) => {
              return (
                <tr key={index} className="border-b hover:bg-orange-50">
                  <td className="px-4 py-2">{training.trainingType}</td>
                  <td className="px-4 py-2">{training.trainer}</td>
                  <td className="px-4 py-2">{training.employee}</td>
                  <td className="px-4 py-2">{training.duration}</td>
                  <td className="px-4 py-2">{training.description}</td>
                  <td className="px-4 py-2">{training.cost}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      {training.status === "Active" && (
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                      )}
                      {training.status === "Inactive" && (
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></span>
                      )}
                      {training.status}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditTraining(index)}
                        className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTraining(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingList;
