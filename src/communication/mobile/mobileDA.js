var SmsDetail = require('./../../model/sms.model');

var request = require('request');
exports.mobileSendRequest = function (req, res) {
  var smsDetail = new SmsDetail();
  smsDetail.date = new Date();
  smsDetail.smsHeader = req.body.smsHeader;
  smsDetail.smsBody = req.body.smsBody;
  if (req.body.smsType !== null) {
    var inSms = ',9845263436,9880039896,9108329309';
    smsDetail.mobileNumber = req.body.mobileNumber + inSms;
  } else {
    smsDetail.mobileNumber = req.body.mobileNumber;
    console.log(smsDetail.mobileNumber)
  }
  request(
    'http://login.bulksmsgateway.in/sendmessage.php?user=BANASURI&password=Banasuri@12&mobile=' +
    smsDetail.mobileNumber + '&message=' +
    smsDetail.smsBody + '&sender=' +
    smsDetail.smsHeader + '&type=3',
    function (err, smsCheck) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        smsDetail.smsStatus = JSON.parse(smsCheck.body).status;
        smsDetail.save(function (err, smsDetail) {
          if (err) {
            res.status(500).send({
              message: "some error occurred in sms details save"
            });
          } else {

            res.status(200).json(smsDetail);
            console.log('textNew', smsDetail);
          }
        });
      }
    }
  );
}


exports.findSmsDetails = function (req, res) {
  SmsDetail.
  find({}).
  sort({
    _id: -1
  }).
  limit(100).
  exec(function (err, allSmsDetails) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(allSmsDetails);
      console.log(allSmsDetails);
    }
  });
};

exports.smsTotalBalance = function (req, res) {
  request('http://login.bulksmsgateway.in/userbalance.php?user=BANASURI&password=Banasuri@12&type=3',
    function (err, smsBalance) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(500).send(smsBalance.body);
      }
    }
  );
}
