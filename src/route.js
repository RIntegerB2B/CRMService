var customerRoutes = require('./customer-management/customerRoute');
var communicationRoutes = require('./communication/communicationRoute');
var b2cMarketRoutes = require('./b2c-market-management/b2cMarketRoute');
exports.loadRoutes = function (app) {
    customerRoutes(app);
    communicationRoutes(app);
    b2cMarketRoutes(app);
};

