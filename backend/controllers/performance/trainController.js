const Trainer = require("../models/trainer");

// Admin - Add a Trainer
exports.addTrainer = async (req, res) => {
  try {
    const { name, email, phone, description } = req.body;

    const trainer = new Trainer({
      name,
      email,
      phone,
      description,
    });

    await trainer.save();
    res.status(201).json({ message: "Trainer added successfully", trainer });
  } catch (error) {
    res.status(500).json({ message: "Error adding trainer", error });
  }
};

// Admin - Get All Trainers
exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainers", error });
  }
};
