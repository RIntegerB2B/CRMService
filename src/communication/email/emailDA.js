var customerDetail = require('../../model/customer-detail.model');

exports.emailSendRequest = function (req, res) {
    var email = req.body.email;
    customerDetail.find({
        'email': email
    }).exec(function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).send({
                "result": 1
            });
        }
    });
}