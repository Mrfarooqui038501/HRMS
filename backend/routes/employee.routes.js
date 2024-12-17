const express = require("express");
// const { checkRole } = require("../middleware/rolemiddleware");
const attendanceController = require("../controllers/employee/attendanceController");
const departmentController = require("../controllers/employee/departmentController");
const employeeController = require("../controllers/employee/employeeController");
const holidayController = require("../controllers/employee/holidayController");
const leaveController = require("../controllers/employee/leaveController");
const designationController = require("../controllers/employee/designationController")

const router = express.Router();

// Attendance Routes
router.post("/attendance", attendanceController.addAttendance);
router.get("/attendance",  attendanceController.getAllAttendance);

// Department Routes
router.post("/department",  departmentController.addDepartment);
router.get("/departments",  departmentController.getAllDepartments);

// Employee Routes
router.post("/employee",  employeeController.addEmployee);
router.get("/employees",  employeeController.getAllEmployees);
router.get("/profile",  employeeController.getProfile);

// Holiday Routes
router.post("/holiday",  holidayController.addHoliday);
router.get("/holidays",  holidayController.getAllHolidays);

// Leave Routes
router.post("/leave",  leaveController.applyLeave);
router.put("/leave-status",  leaveController.updateLeaveStatus);

// Designation Routes
router.post("/designation", designationController.addDesignation); 
router.get("/designations", designationController.getAllDesignations); 

module.exports = router;
