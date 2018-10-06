var customerRoutes = require('./b2b-customer-management/customerRoute');
var b2cMarketRoutes = require('./b2c-market-management/b2cMarketRoute');
var b2cCustomerRoutes = require('./b2c-customer-management/b2cCustomerRoute');
var b2bMarketRoutes = require('./b2b-market-management/b2bMarketRoute');
var communicationRoutes = require('./communication/communicationRoute');
var userManagementRoutes = require('./user-management/userManagementRoute');
var employeeRoutes = require('./employee-management/employeeRoute')
var vendersRoutes = require('./vendor-management/vendorsRoute')
exports.loadRoutes = function (app) {
    customerRoutes(app);
    communicationRoutes(app);
    b2bMarketRoutes(app);
    b2cMarketRoutes(app);
    b2cCustomerRoutes(app);
    employeeRoutes(app);
    vendersRoutes(app);
    userManagementRoutes(app);
};

