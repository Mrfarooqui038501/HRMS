const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
  position: { type: mongoose.Schema.Types.ObjectId, ref: "Designation", required: true },
  status: { type: String, default: "Active" },
  role: { 
    type: String, 
    enum: ["Employee", "Admin"], 
    default: "Employee" // Default role is 'Employee'
  },
 
  
});

module.exports = mongoose.model("Employee", employeeSchema);
