const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Install with `npm install uuid`

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE'
  },
  role: {
    type: String,
    enum: ['ADMIN', 'EMPLOYEE'],
    default: 'EMPLOYEE'
  }
}, {
  timestamps: true
});

// employeeSchema.pre('save', async function(next) {
//   if (this.isNew) {
//     const count = await mongoose.model('Employee').countDocuments();
//     this.employeeId = `EMP${String(count + 1).padStart(4, '0')}`;
//   }
//   next();
// });

module.exports = mongoose.model('Employee', employeeSchema);
