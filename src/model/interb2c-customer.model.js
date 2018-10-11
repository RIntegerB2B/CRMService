
var mongoose = require('mongoose');
var InterB2cCustomerSchema = new mongoose.Schema({
    customerName: String,
    gender: String,
    mobileNumber: String,
    email: String,
    dateOfBirth: String,
    nationality: String,
    categoryType: String,
    designation: String,
    location: String
}); 
 
const InterB2cCustomer = mongoose.model('internationalb2ccustomer', InterB2cCustomerSchema);
module.exports = InterB2cCustomer;