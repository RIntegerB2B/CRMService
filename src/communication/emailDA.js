var customerDetail = require('../model/customer-detail.model');

exports.emailSendRequest = function (req, res) {
    customerDetail.find({
        'emaildId': req.params.emaildId
    }).exec(function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).send({
                "result": "1"
            });
        }
    })
}