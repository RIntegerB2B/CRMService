'use strict';
var Nexmo = require('nexmo');
var CustomerDetail = require('../../model/customer-detail.model');



/* curl -X POST  https://rest.nexmo.com/sms/json \
-d api_key=08495aab \
-d api_secret=OzyqFjBAYsmNUp3F \
-d to=919965437973 \
-d from="NEXMO" \
-d text="Hello from Nexmo"
 */


/* var nexmo = new Nexmo({
    apiKey: '08495aab',
    apiSecret: 'OzyqFjBAYsmNUp3F'
}, {
    debug: true
}); */
/* message sent */
/* exports.mobileSendRequest = function (req, res) {
    
    var customerDetail = new CustomerDetail(req.body);
    var mobileNumber = req.body.phone.toString().split(',');
    CustomerDetail.find({
        'phone': {
            '$in': mobileNumber
        }
    }, function (err, responseData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('CustomerDetails: ', responseData);
            var text = req.body.text;
            Promise.all(responseData.map(sub =>  nexmo.message.sendSms(
                '12034848525', sub.phone, JSON.stringify(text))))
                .then(() => res.status(200).json({
                    message: responseData
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
    
        }
    });
}; */


/* exports.mobileSendRequest = function (req, res) {
    
    var customerDetail = new CustomerDetail(req.body);
    var mobileNumber = req.body.phone.toString().split(',');
    CustomerDetail.find({
        'phone': {
            '$in': mobileNumber
        }
    }, function (err, responseData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('CustomerDetails: ', responseData);
            var text = req.body.text;
            Promise.all(responseData.map(sub =>  smsGateway.message.sendMessageToNumber(
                ' ', sub.phone, JSON.stringify(text))))
                .then(() => res.status(200).json({
                    message: responseData
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
    
        }
    });
};
 */
/* var options = {
    host: 'http://www.login.bulksmsgateway.in',
    port: 80,
    path: '/sendmessage.php?user=Nidhin22&password=Nidhin@1&mobile=8675451008,9965437973&message=hello&sender=RIPSIL&type=3',
    method: 'POST'
  };
  
  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end()
 */
var request = require('request');
exports.mobileSendRequest = function (req, res) {

var mN = req.body.mobileNumber;
var textMessage =  req.body.message;
CustomerDetail.find({
    'mobileNumber': {
        '$in': mN
    }
}), request.post({
    url: 'http://login.bulksmsgateway.in/sendmessage.php?user=BANASURI&password=Banasuri@12&mobile='+ mN +'&message='+ textMessage +'&sender=RUDRAMMA&type=3'
},
    function (error, response) {
        if (!error && response.statusCode == 200) {
            {
                res.status(200).send({
                    "result": "1"
                });
            }
        }
    }
);
}



//http://login.bulksmsgateway.in/sendmessage.php?user=BANASURI&password=Banasuri@12&mobile=9965437973&message=hello&sender=RIPSIL&type=3
