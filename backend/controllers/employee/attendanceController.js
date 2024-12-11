
const Attendance = require("../../models/employee/Attendance")


// Employee - Add Attendance
exports.addAttendance = async (req, res) => {
  try {
    const { date, punchIn, punchOut, production, break: breakTime, overtime } = req.body;

    const attendance = new Attendance({
      employeeId: req.user.id, // Assuming logged-in user's ID is in req.user
      date,
      punchIn,
      punchOut,
      production,
      break: breakTime,
      overtime,
    });

    await attendance.save();
    res.status(201).json({ message: "Attendance added", attendance });
  } catch (error) {
    res.status(500).json({ message: "Error adding attendance", error });
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
