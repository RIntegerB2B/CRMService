var customerRoutes = require('./b2b-customer-management/customerRoute');
var b2cMarketRoutes = require('./b2c-market-management/b2cMarketRoute');
var b2cCustomerRoutes = require('./b2c-customer-management/b2cCustomerRoute');
var b2bMarketRoutes = require('./b2b-market-management/b2bMarketRoute');
var communicationRoutes = require('./communication/communicationRoute');
var userManagementRoutes = require('./user-management/userManagementRoute');
var employeeRoutes = require('./employee-management/employeeRoute');
var vendersRoutes = require('./vendor-management/vendorsRoute');
var otherRoutes = require('./other-customer-management/otherRoute');
var agentRoutes = require('./agent-management/agentRoute');
var interb2bCustomerRoutes = require('./interb2b-customer-management/interb2bCustomerRoute');
var interb2bMarketRoutes = require('./interb2b-market-management/interb2bMarketRoute');
var interb2cCustomerRoutes = require('./interb2c-customer-management/interb2cCustomerRoute');
var interb2cMarketRoutes = require('./interb2c-market-management/interb2cMarketRoute');
var messageRoutes = require('./message-management/messageRoute');
var imageRoutes = require('./image-upload/imageRoute');

exports.loadRoutes = function (app) {
    customerRoutes(app);
    communicationRoutes(app);
    b2bMarketRoutes(app);
    b2cMarketRoutes(app);
    b2cCustomerRoutes(app);
    employeeRoutes(app);
    vendersRoutes(app);
    userManagementRoutes(app);
    otherRoutes(app);
    agentRoutes(app);
    interb2bCustomerRoutes(app);
    interb2bMarketRoutes(app);
    interb2cCustomerRoutes(app);
    interb2cMarketRoutes(app);
    messageRoutes(app);
    imageRoutes(app);
};

