const mongoose = require('mongoose');

const adminLeavePortalSchema = new mongoose.Schema({
  employee: {
    type: String,
    required: true
  },
  leaveType: {
    type: String,
    required: true,
    enum: ['Sick Leave', 'Vacation', 'Casual Leave']
  },
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('LeaveRequest', adminLeavePortalSchema);