'use strict';
var emailDA = require('./emailDA');
var nodemailer = require('nodemailer');

exports.emailSendRequest = function (req, res) {
    var email = req.body.email;
    var textMessage = req.body.emailMessage;
    var subjectTitle = req.body.subjectTitle;
    emailDA.emailSendRequest(req, res); {
        try {
            sendEmail(email, textMessage, subjectTitle);
        } catch (error) {
            console.log(error);
        }
    }
}

var sendEmail = function (email, textMessage, subjectTitle) {
    let transporter = nodemailer.createTransport({
        host: 'lnx5.vnetindia.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: 'welcome@ucchal.com',
            pass: 'india@123#'
        },
        debug: true,
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: 'welcome@ucchal.com',
        to: email,
        subject: subjectTitle,
        html: '<html><body>'+ textMessage +'</body></html>'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json(info);
            
        }
    });
}
