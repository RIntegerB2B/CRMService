var mongoose = require('mongoose');
var VendorSchema = new mongoose.Schema({
    vendorName: String,
    mobileNumber: String,
    whatsAppNo: String,
    landLine: String,
    email: String,
    vendorService: String,
    address: String,
    vendorCompanyName: String,
    companyAddress: String,
    location: String,
    gstNumber: String,
    vendorGrade: String
});

const Vendor = mongoose.model('vendor', VendorSchema);
module.exports = Vendor;