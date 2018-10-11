var interb2bMarketDA = require('./interb2bMarketDA')



exports.createInterB2bMarket = function (req, res) {
    try {
        interb2bMarketDA.createInterB2bMarket(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleInterB2bMarket = function (req, res) {
    try {
        interb2bMarketDA.singleInterB2bMarket(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.interB2bMarketDetailsEdit = function (req, res) {
    try {
        interb2bMarketDA.interB2bMarketDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.interB2bMarketDetailsDelete = function (req, res) {
    try {
        interb2bMarketDA.interB2bMarketDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allInterB2bMarketCustomers = function (req, res) {
    try {
        interb2bMarketDA.allInterB2bMarketCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.interB2bMarketDuplicateData = function (req, res) {
    try {
        interb2bMarketDA.interB2bMarketDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}