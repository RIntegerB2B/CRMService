'use strict';
var emailDA = require('./emailDA');
var nodemailer = require('nodemailer');

exports.emailSendRequest = function(req, res)
{
    var emailId = req.params.emailId;
    emailDA.emailSendRequest(req, res);
    {
        try {
            sendEmail(emailId);
          }
          catch(error){
            console.log(error);
          }
    }
}
    var sendEmail = function (emailId)
     {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'ripsildeveloper3@gmail.com',
            pass: 'Coding@123'
        }
    });
    var mailOptions = {
        from: 'ripsildeveloper3@gmail.com',
        to: emailId,
        subject: 'welcome to crm'
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response)
        }
    });
}
