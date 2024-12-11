const Holiday = require("../../models/employee/Holiday");

// Admin - Add Holiday
exports.addHoliday = async (req, res) => {
  try {
    const { name, date } = req.body;

    const holiday = new Holiday({ name, date });
    await holiday.save();

    res.status(201).json({ message: "Holiday added", holiday });
  } catch (error) {
    res.status(500).json({ message: "Error adding holiday", error });
  }
};

// Employee/Admin - Get All Holidays
exports.getAllHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.status(200).json(holidays);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holidays", error });
  }
};
