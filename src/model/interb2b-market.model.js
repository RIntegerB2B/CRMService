var mongoose = require('mongoose');
var InterB2bMarketSchema = new mongoose.Schema({
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

const InterB2bMarket = mongoose.model('internationalb2bmarket', InterB2bMarketSchema);
module.exports = InterB2bMarket;