import React, { useState } from "react";

const TrainingType = () => {
    // State to store trainings
    const [trainings, setTrainings] = useState([]);
    const [training, setTraining] = useState({
        trainingType: "",
        description: "",
        status: "", // Status will now be a dropdown (Active/Inactive)
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
            training.description &&
            training.status
        ) {
            setTrainings([...trainings, training]);
            setTraining({
                trainingType: "",

                description: "",

                status: "", // Reset status after adding
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
            training.description &&
            training.status
        ) {
            const updatedTrainings = trainings.map((t, index) =>
                index === editingIndex ? training : t
            );
            setTrainings(updatedTrainings);
            setTraining({
                trainingType: "",
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
            <h1 className="text-3xl font-semibold text-orange-600 mb-6">Training Type</h1>

            {/* Toggle Form Button */}
            <button
                onClick={() => {
                    setIsFormOpen(!isFormOpen);
                    setIsEditing(false); // Reset editing mode when toggling the form
                    setTraining({
                        trainingType: "",
                        description: "",
                        status: "", // Reset status field
                    });
                }}
                className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
            >
                {isFormOpen ? "Cancel" : "Add Training"}
            </button>

            {/* Form for Adding/Editing Trainings */}
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


                    <textarea
                        name="description"
                        value={training.description}
                        placeholder="Description"
                        onChange={handleChange}
                        className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />


                    {/* Dropdown for status (Active/Inactive) */}
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
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainings.map((training, index) => (
                            <tr key={index} className="border-b hover:bg-orange-50">
                                <td className="px-4 py-2">{training.trainingType}</td>

                                <td className="px-4 py-2">{training.description}</td>

                                <td className="px-4 py-2 flex items-center">
                                    <span className="mr-2">{training.status}</span>
                                    <div className={`w-3 h-3 rounded-full ${statusLightClass(training.status)}`} />
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrainingType;
