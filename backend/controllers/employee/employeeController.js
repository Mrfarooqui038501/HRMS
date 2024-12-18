const Employee = require("../../models/employee/Employee");




// Admin - Add Employee
exports.addEmployee = async (req, res) => {
  try {
    const { name, department, position, role } = req.body;

    const employee = new Employee({
      name,
      department,
      position,
      role,
      // employeeId is auto-generated
    });

    await employee.save();

    res.status(201).json({ message: "Employee added successfully", employee });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error adding employee", error });
  }
};

// Admin - Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("department", "name")
      .populate("position", "title");
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees", error });
  }
};

// Employee - Get Profile
exports.getProfile = async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id)
      .populate("department", "name")
      .populate("position", "title");

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
};
