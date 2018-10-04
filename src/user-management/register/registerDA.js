'use strict';
var RegAccount = require('./../../model/register.model');
var AdminAccount = require('./../../model/admin-account.model');

exports.createRegisterDetail = function (req, res) {
    var regAccount = new RegAccount();
    regAccount.userName = req.body.userName;
    regAccount.password = req.body.password;
    regAccount.mobileNumber = req.body.mobileNumber;
    regAccount.email = req.body.email;
    regAccount.userType = req.body.userType;
    regAccount.save(function (err, regData) {
        if (err) {
            res.status(500).json(err);
            console.log(err);
        } else {
            var adminAccount = new AdminAccount();
            adminAccount.userName = req.body.userName;
            adminAccount.password = req.body.password;
            adminAccount.userType = req.body.userType;
            adminAccount.save(function (err, saData) {
                if (err) {
                    res.status(500).json(err);
                    console.log(err);
                } else {
                    res.status(200).json(saData);
                    console.log(saData);
                }
            });

        }
    });
};
exports.userRegisterDetail = function (req, res) {
    RegAccount.find({}, function (err, regData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send(regData);
        }
    });
};