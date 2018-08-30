var customerRoutes = require('./customer-management/customerRoute');
var communicationRoutes = require('./communication/communicationRoute');
exports.loadRoutes = function (app) {
    customerRoutes(app);
    communicationRoutes(app);
};

