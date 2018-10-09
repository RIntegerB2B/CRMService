var vendorsMgr = require('./vendorsMgr');

module.exports = function (app) {
    app.route('/vendor')
        .post(vendorsMgr.createVendors);
        app.route('/vendor/:id')
        .put(vendorsMgr.vendorsEdit);
    app.route('/vendordelete/:id')
        .delete(vendorsMgr.vendorsDelete);
    app.route('/allvendor')
        .get(vendorsMgr.allVendorsCustomers);
    app.route('/duplicatevendor')
        .get(vendorsMgr.vendorDuplicateData);
    app.route('/singlevendor')
        .post(vendorsMgr.singleVendor);


}