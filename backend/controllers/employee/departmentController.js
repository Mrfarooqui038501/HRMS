const Department = require("../../models/employee/Department");


const generateDepartmentId = (name, location) => {
  const prefix = name.toUpperCase().slice(0, 2); // First 2 letters of the department name
  const locationCode = location.toUpperCase().slice(0, 2); // First 2 letters of the location
  const randomSuffix = Math.floor(1 + Math.random() * 99).toString().padStart(2, '0'); // Two-digit unique suffix
  return `${prefix}${locationCode}${randomSuffix}`; // Example: ITNY01 (IT department in New York)
};


// Admin - Add Department
exports.addDepartment = async (req, res) => {
  try {
    const { name, location } = req.body;

    // Check if a department with the same name and location already exists
    const existingDepartment = await Department.findOne({ name, location });
    if (existingDepartment) {
      return res.status(400).json({ message: "Department with the same name and location already exists" });
    }

    const department = new Department({
      name,
      location,
      departmentId: generateDepartmentId(name, location),
    });
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
    res.status(200).json(departments); // Include name, location, and departmentId in the response
  } catch (error) {
    res.status(500).json({ message: "Error fetching departments", error });
  }
};


// Admin - Remove Department
exports.removeDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDepartment = await Department.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(200).json({ message: "Department removed", department: deletedDepartment });
  } catch (error) {
    res.status(500).json({ message: "Error removing department", error });
  }
};


