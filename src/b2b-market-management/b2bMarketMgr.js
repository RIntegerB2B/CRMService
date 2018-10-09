var b2bMarketDA = require('./b2bMarketDA')



exports.createB2bMarket = function (req, res) {
    try {
        b2bMarketDA.createB2bMarket(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleB2bMarket = function (req, res) {
    try {
        b2bMarketDA.singleB2bMarket(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.b2bMarketDetailsEdit = function (req, res) {
    try {
        b2bMarketDA.b2bMarketDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.b2bMarketDetailsDelete = function (req, res) {
    try {
        b2bMarketDA.b2bMarketDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allB2bMarketCustomers = function (req, res) {
    try {
        b2bMarketDA.allB2bMarketCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.b2bMarketDuplicateData = function (req, res) {
    try {
        b2bMarketDA.b2bMarketDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}