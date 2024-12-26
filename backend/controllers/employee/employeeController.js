const Employee = require("../../models/employee/Employee");

// Helper function to generate unique employee ID
async function generateUniqueEmployeeId() {
  // Get the latest employee ID
  const latestEmployee = await Employee.findOne().sort({ employeeId: -1 });
  
  if (!latestEmployee) {
    return 'EMP0001';
  }
  
  // Extract the number from the latest ID
  const currentNumber = parseInt(latestEmployee.employeeId.replace('EMP', ''));
  const nextNumber = currentNumber + 1;
  
  // Format the new ID with padding
  return `EMP${String(nextNumber).padStart(4, '0')}`;
}

// Admin - Add Employee
exports.addEmployee = async (req, res) => {
  try {
    const { name, department, position, status } = req.body;

    // Generate unique employee ID
    const employeeId = await generateUniqueEmployeeId();

    const employee = new Employee({
      employeeId,
      name,
      department,
      position,
      status: status || 'ACTIVE',
      role: 'EMPLOYEE'
    });

    await employee.save();
    res.status(201).json({ message: "Employee added successfully", employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding employee", error: error.message });
  }
};

// Admin - Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("department", "name")
      .populate("position", "title")
      .sort({ employeeId: 1 });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees", error: error.message });
  }
};

// Employee - Get Profile
exports.getProfile = async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id)
      .populate("department", "name")
      .populate("position", "title");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
};

// Admin - Remove Employee
exports.removeEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing employee", error: error.message });
  }
};