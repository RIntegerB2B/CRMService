var mongoose = require('mongoose');
var RegisterSchema = new mongoose.Schema({
    userName : String,
    password: String,
    mobileNumber: String,
    email: String,
    userType: String,
    isActive: Boolean
}); 
 
const Register = mongoose.model('userdetail', RegisterSchema);
module.exports = Register;