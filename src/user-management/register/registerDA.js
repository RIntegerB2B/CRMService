'use strict';
var RegAccount = require('./../../model/register.model')
exports.createRegisterDetail = function (req, res) {
    var regAccount = new RegAccount();
    regAccount.userName = req.body.userName;
    regAccount.password = req.body.password;
    regAccount.mobileNumber = req.body.mobileNumber;
    regAccount.email = req.body.email;
    regAccount.userType = req.body.userType;
    regAccount.save(function (err, regData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send(regData);
        }
    });
};
