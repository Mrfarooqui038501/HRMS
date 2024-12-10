const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  month: { type: String, required: true },
  score: { type: Number, required: true },
  status: { type: String, enum: ["On Track", "At Risk", "Off Track"], default: "On Track" },
});

module.exports = mongoose.model("Performance", performanceSchema);
