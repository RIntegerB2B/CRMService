var mongoose = require('mongoose');

const AccessAccountSchema = new mongoose.Schema({
    smsPermission: Boolean,
    emailPermission: Boolean,
    editPermission: Boolean,
    deletePermission: Boolean
});

const AccessAccount = mongoose.model('accessuser', AccessAccountSchema);
module.exports = AccessAccount;