var b2cMarketMgr = require('./b2cMarketMgr');

module.exports = function (app) {
    app.route('/b2cmarket')
        .post(b2cMarketMgr.createB2cMarket);
        app.route('/b2cmarket/:id')
        .put(b2cMarketMgr.b2cMarketDetailsEdit);
    app.route('/b2cmarketdelete/:id')
        .delete(b2cMarketMgr.b2cMarketDetailsDelete);
    app.route('/allb2cmarket')
        .get(b2cMarketMgr.allB2cMarketCustomers);
    app.route('/duplicateb2cmarket')
        .get(b2cMarketMgr.b2cMarketDuplicateData);
    app.route('/singleb2cmarket')
        .post(b2cMarketMgr.singleB2cMarket);

}