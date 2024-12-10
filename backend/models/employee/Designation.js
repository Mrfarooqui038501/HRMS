const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
});

module.exports = mongoose.model("Designation", designationSchema);
