var interb2bMarketMgr = require('./interb2bMarketMgr');

module.exports = function (app) {
    app.route('/interb2bmarket')
        .post(interb2bMarketMgr.createInterB2bMarket);
        app.route('/interb2bmarket/:id')
        .put(interb2bMarketMgr.interB2bMarketDetailsEdit);
    app.route('/interb2bmarketdelete/:id')
        .delete(interb2bMarketMgr.interB2bMarketDetailsDelete);
    app.route('/allinterb2bmarket')
        .get(interb2bMarketMgr.allInterB2bMarketCustomers);
    app.route('/duplicateinterb2bmarket')
        .get(interb2bMarketMgr.interB2bMarketDuplicateData);
        app.route('/singleinterb2bmarket')
        .post(interb2bMarketMgr.singleInterB2bMarket);

}