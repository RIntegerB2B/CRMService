// var CustomerDetail = require('../../model/customer-detail.model');

var request = require('request');
exports.mobileSendRequest = function (req, res) {
var mN = req.body.mobileNumber;
var textMessage =  req.body.message;
var smsHeader = req.body.smsHeader;
request.post({
    url: 'http://login.bulksmsgateway.in/sendmessage.php?user=BANASURI&password=Banasuri@12&mobile='+ mN +'&message='+ textMessage +'&sender='+
     smsHeader +'&type=3'
},    function (err, smsCheck) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(smsCheck);
        }
    }
); 
}

