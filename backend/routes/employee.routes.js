const express = require("express");
const { checkRole } = require("../middleware/rolemiddleware");
const attendanceController = require("../controllers/employee/attendanceController");
const departmentController = require("../controllers/employee/departmentController");
const employeeController = require("../controllers/employee/employeeController");
const holidayController = require("../controllers/employee/holidayController");
const leaveController = require("../controllers/employee/leaveController");

const router = express.Router();

// Attendance Routes
router.post("/attendance", checkRole("Employee"), attendanceController.addAttendance);
router.get("/attendance", checkRole("Admin"), attendanceController.getAllAttendance);

// Department Routes
router.post("/department", checkRole("Admin"), departmentController.addDepartment);
router.get("/departments", checkRole("Admin"), departmentController.getAllDepartments);

// Employee Routes
router.post("/employee", checkRole("Admin"), employeeController.addEmployee);
router.get("/employees", checkRole("Admin"), employeeController.getAllEmployees);
router.get("/profile", checkRole("Employee"), employeeController.getProfile);

// Holiday Routes
router.post("/holiday", checkRole("Admin"), holidayController.addHoliday);
router.get("/holidays", checkRole("Admin"), holidayController.getAllHolidays);

// Leave Routes
router.post("/leave", checkRole("Employee"), leaveController.applyLeave);
router.put("/leave-status", checkRole("Admin"), leaveController.updateLeaveStatus);

module.exports = router;
