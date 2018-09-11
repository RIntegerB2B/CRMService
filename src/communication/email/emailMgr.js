'use strict';
var emailDA = require('./emailDA');
var nodemailer = require('nodemailer');

exports.emailSendRequest = function(req, res)
{
    var email = req.body.email;
    emailDA.emailSendRequest(req, res);
    {
        try {
            sendEmail(email);
          }
          catch(error){
            console.log(error);
          }
    }
}
    var sendEmail = function (email)
     {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'rintegernotification@gmail.com',
            pass: 'SellerApp@1'
        }
    });
    var emailMessage= req.body.emailMessage;
    var mailOptions = {
        from: 'rintegernotification@gmail.com',
        to: email,
        subject: 'welcome to crm',
        text: emailMessage
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response)
        }
    });
}
