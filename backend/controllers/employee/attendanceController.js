
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
// Admin - Get All Attendance
exports.getAllAttendance = async (req, res) => {
  try {
    // Add query filters if needed
    const { employeeName, month, year } = req.query;
    const query = {};

    if (employeeName) query['employeeId.name'] = new RegExp(employeeName, 'i');
    if (month && year) {
      query.date = {
        $regex: `^${year}-${month.padStart(2, '0')}`, // Matches YYYY-MM format
      };
    }

    const attendance = await Attendance.find(query).populate("employeeId", "name photo");
    res.status(200).json(attendance);
  } catch (error) {
    console.error("Error fetching attendance:", error.message);
    res.status(500).json({ message: "Error fetching attendance", error: error.message });
  }
};

