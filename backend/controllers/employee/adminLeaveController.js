const Leave = require('../../models/employee/Leave');
const Employee = require('../../models/employee/Employee');

// Get all leave requests with employee details
exports.getAllLeaveRequests = async (req, res) => {
    try {
      const leaveRequests = await Leave.find()
        .populate('employeeId', 'employeeId name department position')
        .sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        data: leaveRequests
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };
  
  // Update leave request status
  exports.updateLeaveStatus = async (req, res) => {
    try {
      const { leaveId, status } = req.body;
      
      const leaveRequest = await Leave.findByIdAndUpdate(
        leaveId,
        { status },
        { new: true, runValidators: true }
      ).populate('employeeId', 'employeeId name department position');
  
      if (!leaveRequest) {
        return res.status(404).json({
          success: false,
          error: 'Leave request not found'
        });
      }
  
      res.status(200).json({
        success: true,
        data: leaveRequest
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };