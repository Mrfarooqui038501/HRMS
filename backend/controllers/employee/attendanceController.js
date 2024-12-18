
const Attendance = require("../../models/employee/Attendance")


// Employee - Add Attendance
exports.addAttendance = async (req, res) => {
  try {
    const {
      employeeId, // Get employeeId explicitly from request body
      date,
      punchIn,
      punchOut,
      production,
      break: breakTime,
      overtime,
    } = req.body;

    const attendance = new Attendance({
      employeeId, // Use employeeId directly
      date,
      punchIn,
      punchOut,
      production,
      break: breakTime,
      overtime,
    });

    await attendance.save();
    res.status(201).json({ message: "Attendance added successfully", attendance });
  } catch (error) {
    console.error("Error details:", error); // Log the actual error to debug
    res.status(500).json({ message: "Error adding attendance", error: error.message });
  }
};

// Admin - Get All Attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("employeeId", "name");
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance", error });
  }
};
