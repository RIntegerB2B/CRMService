'use strict';

var customerMgr = require('./customerMgr');

module.exports = function (app) {
    app.route('/customers')
        .post(customerMgr.createCustomer);
    app.route('/customers/:id')
        .put(customerMgr.customerDetailsEdit);
    app.route('/customersdelete/:id')
        .delete(customerMgr.customerDetailsDelete);
    app.route('/allcustomers')
        .get(customerMgr.allCustomers);
    app.route('/duplicatecustomers')
        .get(customerMgr.customerDuplicateData);
    app.route('/singlecustomer')
        .post(customerMgr.singleCustomers);
}