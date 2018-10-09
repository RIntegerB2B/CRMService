var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    customerName: String,
    mobileNumber: String,
    whatsAppNo: String,
    landLine: String,
    email: String,
    companyName: String,
    companyAddress: String,
    location: String,
    gstNumber: String,
    customerGrade: String,
    brandName: String,
}); 

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;