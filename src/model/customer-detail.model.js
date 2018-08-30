var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    address: String,
    email: String
});

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;