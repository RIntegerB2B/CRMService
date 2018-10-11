var mongoose = require('mongoose');
var InterB2bCustomerSchema = new mongoose.Schema({
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

const InterB2bCustomerDetail = mongoose.model('internationalb2bcustomer', InterB2bCustomerSchema);
module.exports = InterB2bCustomerDetail;