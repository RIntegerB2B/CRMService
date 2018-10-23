var mongoose = require('mongoose');
var InterB2cMarketSchema = new mongoose.Schema({
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
 
const InterB2cMarket = mongoose.model('internationalb2cMarket', InterB2cMarketSchema);
module.exports = InterB2cMarket;