
var mongoose = require('mongoose');
var OtherSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: String,
    mobileNumber: String,
    location: String,
    address: String
}); 
const Other = mongoose.model('othercustomer', OtherSchema);
module.exports = Other;
