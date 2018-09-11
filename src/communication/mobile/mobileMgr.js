var mobileDA = require('./mobileDA');

exports.mobileSendRequest = function (req, res) {
    try {
        mobileDA.mobileSendRequest(req, res);
    } catch (error) {
        console.log(error);
    }

}
