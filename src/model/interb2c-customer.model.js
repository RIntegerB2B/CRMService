
var mongoose = require('mongoose');
var InterB2cCustomerSchema = new mongoose.Schema({
    customerName: String,
    countryCode: String,
    mobileNumber: String,
    gender: String,
    email: String,
    dateOfBirth: String,
    country: String,
    nationality: String,
    categoryType: String,
    designation: String,
    location: String
}); 
 
const InterB2cCustomer = mongoose.model('internationalb2ccustomer', InterB2cCustomerSchema);
module.exports = InterB2cCustomer;