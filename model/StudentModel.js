const studentSchema = require('../schema/StudentSchema');
const mongoose = require('mongoose');

const student = mongoose.model('student', studentSchema)

module.exports = student;