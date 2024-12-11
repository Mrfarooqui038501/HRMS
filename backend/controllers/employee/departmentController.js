const Department = require("../../models/employee/Department");

// Admin - Add Department
exports.addDepartment = async (req, res) => {
  try {
    const { name, location } = req.body;

    const department = new Department({ name, location });
    await department.save();

    res.status(201).json({ message: "Department added", department });
  } catch (error) {
    res.status(500).json({ message: "Error adding department", error });
  }
};

// Admin - Get All Departments
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching departments", error });
  }
};
