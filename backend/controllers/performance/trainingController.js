const Training = require("../../models/performance/Training");

// Admin - Add Training
exports.addTraining = async (req, res) => {
  try {
    const { trainingType, trainer, employee, duration, description, cost } = req.body;

    const training = new Training({
      trainingType,
      trainer,
      employee,
      duration,
      description,
      cost,
    });

    await training.save();
    res.status(201).json({ message: "Training added successfully", training });
  } catch (error) {
    res.status(500).json({ message: "Error adding training", error });
  }
};

// Admin - Get All Trainings
exports.getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find()
      .populate("trainer", "name")
      .populate("employee", "name");
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainings", error });
  }
};
