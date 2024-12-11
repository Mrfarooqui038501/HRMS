const TrainingType = require("../../models/performance/TrainingType");

// Admin - Add Training Type
exports.addTrainingType = async (req, res) => {
  try {
    const { trainingType, description } = req.body;

    const type = new TrainingType({
      trainingType,
      description,
    });

    await type.save();
    res.status(201).json({ message: "Training type added successfully", type });
  } catch (error) {
    res.status(500).json({ message: "Error adding training type", error });
  }
};

// Admin - Get All Training Types
exports.getAllTrainingTypes = async (req, res) => {
  try {
    const trainingTypes = await TrainingType.find();
    res.status(200).json(trainingTypes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching training types", error });
  }
};
