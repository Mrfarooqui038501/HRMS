import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const employeeService = {
  getAllEmployees: async () => {
    const response = await api.get('/employee/employees');
    return response.data;
  },
  
  addEmployee: async (employeeData) => {
    const response = await api.post('/employee/employee', employeeData);
    return response.data;
  },

  removeEmployee: async (id) => {
    const response = await api.delete(`/employee/employee/${id}`);
    return response.data;
  },
};


export const departmentService = {
  getAllDepartments: async () => {
    const response = await api.get('/employee/departments');
    return response.data;
  },

  addDepartment: async (departmentData) => {
    const response = await api.post('/employee/department', departmentData);
    return response.data;
  },

  removeDepartment: async (id) => {
    const response = await api.delete(`/employee/department/${id}`); // Route to delete
    return response.data;
  },

};

export const attendanceService = {
  getAllAttendance: async (queryParams = {}) => {
    const response = await api.get('/employee/attendance', { params: queryParams });
    return response.data;
  },

  addAttendance: async (attendanceData) => {
    const response = await api.post('/employee/attendance', attendanceData);
    return response.data;
  },
};

export const holidayService = {
  getAllHolidays: async () => {
    const response = await api.get('/employee/holidays');
    return response.data;
  },

  addHoliday: async (holidayData) => {
    const response = await api.post('/employee/holiday', holidayData);
    return response.data;
  },

  removeHoliday: async (id) => {
    const response = await api.delete(`/employee/holiday/${id}`);
    return response.data;
  },
};



export const leaveService = {
  applyLeave: async (leaveData) => {
    const response = await api.post('/employee/leave', leaveData);
    return response.data;
  },
  getLeaveRequestsByEmployee: async (employeeId) => {
    const response = await api.get(`/employee/leave/${employeeId}`);
    return response.data;
  },
  getAllLeaveRequests: async () => {
    const response = await api.get('/employee/leave/all'); // Match the backend route
    return response.data;
  },

  updateLeaveStatus: async ({ leaveId, status }) => {
    const response = await api.put('/employee/leave-status', { leaveId, status });
    return response.data;
  },
  
};
