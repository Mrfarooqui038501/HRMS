const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  location: { type: String },
  departmentId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Department", departmentSchema);

