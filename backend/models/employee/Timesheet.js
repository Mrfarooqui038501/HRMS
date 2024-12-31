const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  hours: { type: String, required: true },
  task: { type: String, required: true },
});

module.exports = mongoose.model('Timesheet', timesheetSchema);
