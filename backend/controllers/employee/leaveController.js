const Leave = require("../../models/employee/Leave");
const Employee = require("../../models/employee/Employee");

// Employee - Apply Leave
exports.applyLeave = async (req, res) => {
  try {
    const { employeeId, leaveType, fromDate, toDate } = req.body;
    
    // Validate required fields
    if (!employeeId || !leaveType || !fromDate || !toDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const leave = new Leave({
      employeeId,
      leaveType,
      fromDate,
      toDate,
      status: "Pending",
    });

    await leave.save();
    res.status(201).json({ message: "Leave applied", leave });
  } catch (error) {
    console.error('Error in applyLeave:', error);
    res.status(500).json({ message: "Error applying leave", error: error.message });
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

exports.getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await Leave.find()
      .populate({
        path: 'employeeId',
        select: 'name employeeId',
        model: 'Employee'
      })
      .sort({ fromDate: -1 });

    if (!leaveRequests) {
      return res.status(404).json({ message: "No leave requests found" });
    }

    res.status(200).json(leaveRequests);
  } catch (error) {
    console.error("Error fetching all leave requests:", error);
    res.status(500).json({ 
      message: "Error fetching leave requests", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

exports.getLeaveRequestsByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const leaveRequests = await Leave.find({ employeeId });
    res.status(200).json(leaveRequests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leave requests", error });
  }
};