const TimeSheet = require('../../models/employee/Timesheet');
const Employee = require('../../models/employee/Employee'); 

// Fetch all time sheets for a given employee
exports.getTimeSheetsByEmployee = async (req, res) => {
  const { employeeId } = req.query; // Get employeeId from query parameter

  try {
    // Fetch all time sheets for the employee
    const timeSheets = await TimeSheet.find({ employeeId }).populate('employeeId');
    res.status(200).json({ success: true, data: timeSheets });
  } catch (error) {
    console.error('Error fetching time sheets:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Add a new time sheet entry
exports.addTimeSheet = async (req, res) => {
    const { employeeId, date, hours, task } = req.body;
  
    try {
      // Find the employee by custom ID (e.g., "EMP0002")
      const employee = await Employee.findOne({ employeeId }); // Assuming employeeId is a unique field in Employee schema
  
      if (!employee) {
        return res.status(404).json({ success: false, error: 'Employee not found' });
      }
  
      // Use the _id (ObjectId) from the Employee document
      const newTimeSheet = new TimeSheet({
        employeeId: employee._id,
        date,
        hours,
        task,
      });
  
      await newTimeSheet.save();
      res.status(201).json({ success: true, data: newTimeSheet });
    } catch (error) {
      console.error('Error adding time sheet:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  };

// Edit an existing time sheet entry
exports.updateTimeSheet = async (req, res) => {
  const { timeSheetId } = req.params;
  const { employeeId, date, hours, task } = req.body;

  try {
    // Find and update the time sheet
    const updatedTimeSheet = await TimeSheet.findByIdAndUpdate(
      timeSheetId,
      { employeeId, date, hours, task },
      { new: true }
    );

    if (!updatedTimeSheet) {
      return res.status(404).json({ success: false, error: 'Time sheet not found' });
    }

    res.status(200).json({ success: true, data: updatedTimeSheet });
  } catch (error) {
    console.error('Error updating time sheet:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Delete a time sheet entry
exports.deleteTimeSheet = async (req, res) => {
  const { timeSheetId } = req.params;

  try {
    // Find and delete the time sheet
    const deletedTimeSheet = await TimeSheet.findByIdAndDelete(timeSheetId);

    if (!deletedTimeSheet) {
      return res.status(404).json({ success: false, error: 'Time sheet not found' });
    }

    res.status(200).json({ success: true, data: deletedTimeSheet });
  } catch (error) {
    console.error('Error deleting time sheet:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
