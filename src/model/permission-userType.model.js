var mongoose = require('mongoose');

const UserTypePermssionAccountSchema = new mongoose.Schema({
    userType: String,
    currentDate: String,
    b2bCustomer: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean,
    }],
    b2bMarket: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    b2cCustomer: [{
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
     interB2bCustomer: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    interB2bMarket: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    interB2cCustomer: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    interB2cMarket: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    employee: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    vendor: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    agent: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    others: [{
        addPermission: Boolean,
        editPermission: Boolean,
        deletePermission: Boolean,
        smsPermission: Boolean,
        emailPermission: Boolean
    }],
    menuList: [{
        b2bCustomerPermission: Boolean,
        b2bMarketPermission: Boolean,
        b2cCustomerPermission: Boolean,
        b2cMarketPermission: Boolean,
        employeePermission: Boolean,
        vendorPermission: Boolean,
        agentPermission: Boolean,
        othersPermission: Boolean,
        interB2bCustomerPermission: Boolean,
        interB2bMarketPermission: Boolean,
        interB2cCustomerPermission: Boolean,
        interB2cMarketPermission: Boolean,
        smsMenuPermission: Boolean,
        emailMenuPermission: Boolean,
        uploadPermission: Boolean,
        reportPermission: Boolean,
        interUploadPermission: Boolean,
        userPermission: Boolean,
        backupPermission: Boolean,
        registerPermission: Boolean,
        messagePermission: Boolean,
    }],
    mobilePermission: Boolean,
});
const UserTypePermssionAccount = mongoose.model('permission', UserTypePermssionAccountSchema);
module.exports = UserTypePermssionAccount;