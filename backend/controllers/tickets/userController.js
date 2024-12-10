const User = require("../models/user");

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

// Get All Users (Admin Role)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Update User Role (Admin Role)
exports.updateUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });

    res.status(200).json({ message: "User role updated", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user role", error });
  }
};
