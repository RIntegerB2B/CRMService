var mongoose = require('mongoose');
var smsSchema = new mongoose.Schema({
    date: Date,
    smsHeader : String,
    smsBody: String,
    mobileNumber: String,
    smsStatus: String
}); 
 
const smsDetail = mongoose.model('smsdetail', smsSchema);
module.exports = smsDetail;