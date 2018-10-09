var b2cCustomerMgr = require('./b2cCustomerMgr');

module.exports = function (app) {
    app.route('/b2ccustomer')
        .post(b2cCustomerMgr.createB2cCustomer);
        app.route('/b2ccustomer/:id')
        .put(b2cCustomerMgr.b2cCustomerDetailsEdit);
    app.route('/b2ccustomerdelete/:id')
        .delete(b2cCustomerMgr.b2cCustomerDetailsDelete);
    app.route('/allb2ccustomer')
        .get(b2cCustomerMgr.allB2cCustomers);
    app.route('/duplicateb2ccustomer')
        .get(b2cCustomerMgr.b2cCustomerDuplicateData);
    app.route('/singleb2ccustomer')
        .post(b2cCustomerMgr.singleB2cCustomer);

    
}
