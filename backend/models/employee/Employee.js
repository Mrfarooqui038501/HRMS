const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Install with `npm install uuid`

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
  position: { type: mongoose.Schema.Types.ObjectId, ref: "Designation", required: true },
  status: { type: String, default: "Active" },
  role: { 
    type: String, 
    enum: ["Employee", "Admin"], 
    default: "Employee"
  },
  employeeId: { type: String, unique: true, required: true, default: uuidv4 }, // Generate unique ID
});

module.exports = mongoose.model("Employee", employeeSchema);
