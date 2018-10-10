
var mongoose = require('mongoose');
var EmployeeSchema = new mongoose.Schema({
    empName: String,
    empNo: String,
    gender: String,
    email: String,
    mobileNumber: String,
    whatsappNo: String,
    dateOfBirth: String,
    dateOfJoin: String,
    designation: String,
    address: String
}); 
const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;
