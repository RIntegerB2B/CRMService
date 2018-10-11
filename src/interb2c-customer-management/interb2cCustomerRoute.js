var interb2cCustomerMgr = require('./interb2cCustomerMgr');

module.exports = function (app) {
    app.route('/interb2ccustomer')
        .post(interb2cCustomerMgr.createInterB2cCustomer);
        app.route('/interb2ccustomer/:id')
        .put(interb2cCustomerMgr.interB2cCustomerDetailsEdit);
    app.route('/interb2ccustomerdelete/:id')
        .delete(interb2cCustomerMgr.interB2cCustomerDetailsDelete);
    app.route('/allinterb2ccustomer')
        .get(interb2cCustomerMgr.allInterB2cCustomers);
    app.route('/duplicateinterb2ccustomer')
        .get(interb2cCustomerMgr.interB2cCustomerDuplicateData);
    app.route('/singleinterb2ccustomer')
        .post(interb2cCustomerMgr.singleInterB2cCustomer);

    
}
