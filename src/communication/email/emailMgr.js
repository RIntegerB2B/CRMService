'use strict';
var emailDA = require('./emailDA');
var nodemailer = require('nodemailer');

exports.emailSendRequest = function(req, res)
{
    var email = req.body.email;
    var emailMessage= req.body.emailMessage;
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
        host: 'smtp.example.com',
        port: 80 ,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'welcome@ucchal.com',
            pass: 'india@123#'
        }
    });
  
    var mailOptions = {
        from: 'welcome@ucchal.com',
        to: email,
        subject: 'welcome to ucchal',
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
