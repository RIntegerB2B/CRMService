var b2bMarketMgr = require('./b2bMarketMgr');

module.exports = function (app) {
    app.route('/b2bmarket')
        .post(b2bMarketMgr.createB2bMarket);
        app.route('/b2bmarket/:id')
        .put(b2bMarketMgr.b2bMarketDetailsEdit);
    app.route('/b2bmarketdelete/:id')
        .delete(b2bMarketMgr.b2bMarketDetailsDelete);
    app.route('/allb2bmarket')
        .get(b2bMarketMgr.allB2bMarketCustomers);
    app.route('/duplicateb2bmarket')
        .get(b2bMarketMgr.b2bMarketDuplicateData);
        app.route('/singleb2bmarket')
        .post(b2bMarketMgr.singleB2bMarket);

}