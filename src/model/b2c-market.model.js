var mongoose = require('mongoose');
var B2cMarketSchema = new mongoose.Schema({
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
 
const B2cMarket = mongoose.model('b2cMarket', B2cMarketSchema);
module.exports = B2cMarket;