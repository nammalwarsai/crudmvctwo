// models/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // other fields for Student
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
