var mongoose = require('mongoose');
var B2bMarketSchema = new mongoose.Schema({
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

const B2bMarket = mongoose.model('b2bmarket', B2bMarketSchema);
module.exports = B2bMarket;