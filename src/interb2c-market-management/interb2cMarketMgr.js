var interb2cMarketDA = require('./interb2cMarketDA')



exports.createinterB2cMarket = function (req, res) {
    try {
        interb2cMarketDA.createinterB2cMarket(req, res)

    } catch (error) {
        console.log(error);
    }
}

exports.interB2cMarketDetailsEdit = function (req, res) {
    try {
        interb2cMarketDA.interB2cMarketDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.singleInterB2cMarket = function (req, res) {
    try {
        interb2cMarketDA.singleInterB2cMarket(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.interB2cMarketDetailsDelete = function (req, res) {
    try {
        interb2cMarketDA.interB2cMarketDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allInterB2cMarketCustomers = function (req, res) {
    try {
        interb2cMarketDA.allInterB2cMarketCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.interB2cMarketDuplicateData = function (req, res) {
    try {
        interb2cMarketDA.interB2cMarketDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}