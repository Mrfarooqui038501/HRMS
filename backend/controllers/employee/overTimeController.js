const Employee = require('../../models/employee/Employee');
const Overtime = require('../../models/employee/Overtime');

// Employee Controllers
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ success: true, data: employees });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ success: true, data: employee });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Overtime Controllers
exports.getOvertimeByEmployee = async (req, res) => {
  const { employeeId, year, month } = req.query;

  try {
    const overtimeEntries = await Overtime.find({
      employee: employeeId,
      year,
      month,
    });
    res.status(200).json({ success: true, data: overtimeEntries });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.addOvertime = async (req, res) => {
  try {
    const overtime = await Overtime.create(req.body);
    res.status(201).json({ success: true, data: overtime });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.updateOvertimeStatus = async (req, res) => {
  const { overtimeId, status } = req.body;

  try {
    const updatedOvertime = await Overtime.findByIdAndUpdate(
      overtimeId,
      { status },
      { new: true }
    );
    if (!updatedOvertime) {
      return res.status(404).json({ success: false, error: 'Overtime entry not found' });
    }
    res.status(200).json({ success: true, data: updatedOvertime });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
