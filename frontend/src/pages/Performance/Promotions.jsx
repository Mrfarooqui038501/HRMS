import React, { useState } from "react";

const Promotions = () => {
  // State to store promotions
  const [promotions, setPromotions] = useState([]);
  const [promotion, setPromotion] = useState({
    employee: "",
    designationFrom: "",
    designationTo: "",
    promotionDate: "",
  });

  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State to track if editing a promotion
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromotion((prevPromotion) => ({ ...prevPromotion, [name]: value }));
  };

  // Add a new promotion
  const handleAddPromotion = () => {
    if (
      promotion.employee &&
      promotion.designationFrom &&
      promotion.designationTo &&
      promotion.promotionDate
    ) {
      setPromotions([...promotions, promotion]);
      setPromotion({
        employee: "",
        designationFrom: "",
        designationTo: "",
        promotionDate: "",
      });
      setIsFormOpen(false); // Close the form after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a promotion
  const handleDeletePromotion = (index) => {
    const updatedPromotions = promotions.filter((_, idx) => idx !== index);
    setPromotions(updatedPromotions);
  };

  // Edit a promotion (populate the form with the promotion data)
  const handleEditPromotion = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setPromotion(promotions[index]);
    setIsFormOpen(true); // Open the form for editing
  };

  // Save the edited promotion
  const handleSavePromotion = () => {
    if (
      promotion.employee &&
      promotion.designationFrom &&
      promotion.designationTo &&
      promotion.promotionDate
    ) {
      const updatedPromotions = promotions.map((p, index) =>
        index === editingIndex ? promotion : p
      );
      setPromotions(updatedPromotions);
      setPromotion({
        employee: "",
        designationFrom: "",
        designationTo: "",
        promotionDate: "",
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
      <h1 className="text-3xl font-semibold text-orange-600 mb-6">Promotions</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => {
          setIsFormOpen(!isFormOpen);
          setIsEditing(false); // Reset editing mode when toggling the form
          setPromotion({
            employee: "",
            designationFrom: "",
            designationTo: "",
            promotionDate: "",
          });
        }}
        className="mb-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
      >
        {isFormOpen ? "Cancel" : "Add Promotion"}
      </button>

      {/* Form for Adding/Editing Promotions */}
      {isFormOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="text"
            name="employee"
            value={promotion.employee}
            placeholder="Promoted Employee"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="designationFrom"
            value={promotion.designationFrom}
            placeholder="Designation From"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="designationTo"
            value={promotion.designationTo}
            placeholder="Promotion Designation To"
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="date"
            name="promotionDate"
            value={promotion.promotionDate}
            onChange={handleChange}
            className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={isEditing ? handleSavePromotion : handleAddPromotion}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            {isEditing ? "Save Changes" : "Add Promotion"}
          </button>
        </div>
      )}

      {/* Promotions Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-orange-100 text-left text-orange-600">
              <th className="px-4 py-2">Promoted Employee</th>
              <th className="px-4 py-2">Designation From</th>
              <th className="px-4 py-2">Promotion Designation To</th>
              <th className="px-4 py-2">Promotion Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, index) => (
              <tr key={index} className="border-b hover:bg-orange-50">
                <td className="px-4 py-2">{promotion.employee}</td>
                <td className="px-4 py-2">{promotion.designationFrom}</td>
                <td className="px-4 py-2">{promotion.designationTo}</td>
                <td className="px-4 py-2">{promotion.promotionDate}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditPromotion(index)}
                      className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePromotion(index)}
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

export default Promotions;
