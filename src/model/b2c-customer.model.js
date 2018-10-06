
var mongoose = require('mongoose');
var B2cCustomerSchema = new mongoose.Schema({
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
 
const B2cCustomer = mongoose.model('b2ccustomer', B2cCustomerSchema);
module.exports = B2cCustomer;