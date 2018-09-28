var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    customerName: String,
    mobileNumber: String,
    whatsAppNo: Number,
    landLine: Number,
    email: String,
    companyName: String,
    companyAddress: String,
    location: String,
    gst: Number,
    customerGrade: String,
    brandName: String,
}); 

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;