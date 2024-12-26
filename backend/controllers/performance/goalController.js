const Goal = require("../../models/performance/Goal");

// Employee - Create a Goal
exports.createGoal = async (req, res) => {
  try {
    const {employee, goalType, subject, startDate, endDate, description } = req.body;

    const goal = new Goal({
      employee,
      goalType,
      subject,
      startDate,
      endDate,
      description,
    });

    await goal.save();
    res.status(201).json({ message: "Goal created successfully", goal });
  } catch (error) {
    res.status(500).json({ message: "Error creating goal", error });
  }
};

// Admin - Get All Goals
exports.getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find().populate("employee", "name");
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching goals", error });
  }
};
