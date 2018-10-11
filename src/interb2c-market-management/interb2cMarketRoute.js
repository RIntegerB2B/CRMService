var interb2cMarketDA = require('./interb2cMarketDA');

module.exports = function (app) {
    app.route('/interb2cmarket')
        .post(interb2cMarketDA.createinterB2cMarket);
        app.route('/interb2cmarket/:id')
        .put(interb2cMarketDA.interB2cMarketDetailsEdit);
    app.route('/interb2cmarketdelete/:id')
        .delete(interb2cMarketDA.interB2cMarketDetailsDelete);
    app.route('/allinterb2cmarket')
        .get(interb2cMarketDA.allInterB2cMarketCustomers);
    app.route('/duplicateinterb2cmarket')
        .get(interb2cMarketDA.interB2cMarketDuplicateData);
    app.route('/singleinterb2cmarket')
        .post(interb2cMarketDA.singleInterB2cMarket);

}