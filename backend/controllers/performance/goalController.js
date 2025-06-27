const Goal = require("../../models/performance/Goal");

// Create a Goal
exports.createGoal = async (req, res) => {
  try {
    const employee = req.user._id;
    const { goalType, subject, startDate, endDate, description } = req.body;

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
    res.status(500).json({ message: "Error creating goal", error: error.message });
  }
};

exports.getAllGoals = async (req, res) => {
  try {
    const employee = req.user._id;
    const goals = await Goal.find({ employee });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching goals", error: error.message });
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = req.user._id;
    const updateData = req.body;

    const goal = await Goal.findOne({ _id: id, employee });
    
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true }
    );
    
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: "Error updating goal", error: error.message });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = req.user._id;

    const goal = await Goal.findOne({ _id: id, employee });
    
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    await Goal.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting goal", error: error.message });
  }
};