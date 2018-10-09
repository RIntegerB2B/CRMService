var b2cMarketDA = require('./b2cMarketDA')



exports.createB2cMarket = function (req, res) {
    try {
        b2cMarketDA.createB2cMarket(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.b2cMarketDetailsEdit = function (req, res) {
    try {
        b2cMarketDA.b2cMarketDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.singleB2cMarket = function (req, res) {
    try {
        b2cMarketDA.singleB2cMarket(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.b2cMarketDetailsDelete = function (req, res) {
    try {
        b2cMarketDA.b2cMarketDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allB2cMarketCustomers = function (req, res) {
    try {
        b2cMarketDA.allB2cMarketCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.b2cMarketDuplicateData = function (req, res) {
    try {
        b2cMarketDA.b2cMarketDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}