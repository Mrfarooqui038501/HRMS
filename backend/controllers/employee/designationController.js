const Designation = require("../models/designation");

// Admin - Add Designation
exports.addDesignation = async (req, res) => {
  try {
    const { title, department } = req.body;

    const designation = new Designation({ title, department });
    await designation.save();

    res.status(201).json({ message: "Designation added", designation });
  } catch (error) {
    res.status(500).json({ message: "Error adding designation", error });
  }
};

// Admin - Get All Designations
exports.getAllDesignations = async (req, res) => {
  try {
    const designations = await Designation.find().populate("department", "name");
    res.status(200).json(designations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching designations", error });
  }
};
