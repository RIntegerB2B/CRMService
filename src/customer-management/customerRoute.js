'use strict';

var customerMgr = require('./customerMgr');

module.exports = function (app) {
    app.route('/customers')
        .post(customerMgr.createCustomer);
}