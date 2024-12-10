const Leave = require("../models/leave");

// Employee - Apply Leave
exports.applyLeave = async (req, res) => {
  try {
    const { leaveType, fromDate, toDate } = req.body;

    const leave = new Leave({
      employeeId: req.user.id,
      leaveType,
      fromDate,
      toDate,
      status: "Pending",
    });

    await leave.save();
    res.status(201).json({ message: "Leave applied", leave });
  } catch (error) {
    res.status(500).json({ message: "Error applying leave", error });
  }
};

// Admin - Approve/Reject Leave
exports.updateLeaveStatus = async (req, res) => {
  try {
    const { leaveId, status } = req.body;

    const leave = await Leave.findByIdAndUpdate(leaveId, { status }, { new: true });

    res.status(200).json({ message: "Leave status updated", leave });
  } catch (error) {
    res.status(500).json({ message: "Error updating leave status", error });
  }
};
