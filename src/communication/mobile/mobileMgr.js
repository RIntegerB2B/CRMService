var mobileDA = require('./mobileDA');

exports.mobileSendRequest = function (req, res) {
    try {
        mobileDA.mobileSendRequest(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.findSmsDetails = function (req, res) {
    try {
        mobileDA.findSmsDetails(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.smsTotalBalance = function (req, res) {
    try {
        mobileDA.smsTotalBalance(req, res);
    } catch (error) {
        console.log(error);
    }

}