var mongoose = require('mongoose');

const UserTypePermssionAccountSchema = new mongoose.Schema({
    userType: String,
    currentDate: String,
    b2bCustomer: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }], 
    b2cMarket: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    menuList: [{
        b2bCustomerPermission: Boolean,
        b2cMarketPermission: Boolean,
        smsMenuPermission: Boolean,
        emailMenuPermission: Boolean,
        uploadPermission: Boolean,
        backupPermission: Boolean
    }],
});
const UserTypePermssionAccount = mongoose.model('permission', UserTypePermssionAccountSchema);
module.exports = UserTypePermssionAccount;