const Termination = require("../models/termination");

// Admin - Terminate an Employee
exports.terminateEmployee = async (req, res) => {
  try {
    const { employee, terminationDate, noticeDate, reason } = req.body;

    const termination = new Termination({
      employee,
      terminationDate,
      noticeDate,
      reason,
    });

    await termination.save();
    res.status(201).json({ message: "Employee terminated successfully", termination });
  } catch (error) {
    res.status(500).json({ message: "Error terminating employee", error });
  }
};

// Admin - Get All Terminations
exports.getAllTerminations = async (req, res) => {
  try {
    const terminations = await Termination.find().populate("employee", "name");
    res.status(200).json(terminations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching terminations", error });
  }
};
