'use strict';

var interb2bCustomerMgr = require('./interb2bCustomerMgr');

module.exports = function (app) {
    app.route('/interb2bcustomer')
        .post(interb2bCustomerMgr.createInterB2bCustomer);
    app.route('/interb2bcustomer/:id')
        .put(interb2bCustomerMgr.interB2bCustomerDetailsEdit);
    app.route('/interb2bcustomerdelete/:id')
        .delete(interb2bCustomerMgr.interB2bCustomerDetailsDelete);
    app.route('/allinterb2bcustomer')
        .get(interb2bCustomerMgr.allInterB2bCustomer);
    app.route('/duplicateinterb2bcustomer')
        .get(interb2bCustomerMgr.interB2bCustomerDuplicateData);
    app.route('/singleinterb2bcustomer')
        .post(interb2bCustomerMgr.singleInterB2bCustomers);
}