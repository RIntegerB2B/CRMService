var mongoose = require('mongoose');

const AdminAccountSchema = new mongoose.Schema({
    userName: String,
    password: String,
    isActive: Boolean,
    emailId: String
});

const AdminAccount = mongoose.model('masterdetail', AdminAccountSchema);
module.exports = AdminAccount;