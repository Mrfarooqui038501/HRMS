// controllers/activityController.js
const { Activity } = require('../../models/crm/Activity');  // Assuming Activity model is exported from models

// Get all activities
const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities', error });
  }
};

// Get activity by ID
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    if (activity) {
      res.status(200).json(activity);
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity', error });
  }
};

// Add a new activity
const addActivity = async (req, res) => {
  try {
    const { title, type, dueDate, owner, createdAt } = req.body;

    if (!title || !type || !dueDate || !owner || !createdAt) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newActivity = await Activity.create({
      title,
      type,
      dueDate,
      owner,
      createdAt,
    });

    res.status(201).json(newActivity);
  } catch (error) {
    console.error('Error adding activity:', error);
    res.status(500).json({ message: 'Error adding activity', error: error.message });
  }
};

// Update an existing activity
const updateActivity = async (req, res) => {
  try {
    const { title, type, dueDate, owner, createdAt } = req.body;
    const activity = await Activity.findByPk(req.params.id);

    if (activity) {
      activity.title = title || activity.title;
      activity.type = type || activity.type;
      activity.dueDate = dueDate || activity.dueDate;
      activity.owner = owner || activity.owner;
      activity.createdAt = createdAt || activity.createdAt;

      await activity.save();
      res.status(200).json(activity);
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating activity', error });
  }
};

// Delete an activity
const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    if (activity) {
      await activity.destroy();
      res.status(200).json({ message: 'Activity deleted successfully' });
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting activity', error });
  }
};

module.exports = {
  getAllActivities,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivity,
};
