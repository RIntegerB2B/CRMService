var AdminAccount = require('./../../model/admin-account.model');
var UserTypePermssionAccount = require('../../model/permission-userType.model');

exports.loginTo = function (req, res) {
    AdminAccount.find({
        'userName': req.body.userName,
        'password': req.body.password
    }, function (err, adminDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (!adminDetail[0]) {
                res.status(500).send({
                    result: 1
                });
                /* fullDetails.push(adminDetail);
                console.log();
                res.status(200).json(adminDetail[0]); */
            } else {
                UserTypePermssionAccount.find({
                        'userType': adminDetail[0].userType
                    },
                    function (err, fullDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            fullData = fullDetails.concat(adminDetail[0]);
                            res.status(200).json(fullData);
                            console.log(fullData);
                            console.log(fullDetails);
                        }
                    });

            }
        }
    });
};

exports.createLoginDetail = function (req, res) {
    var adminAccount = new AdminAccount(req.body);

    adminAccount.save(function (err, adminData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred"
            });
        } else {
            res.status(200).json(adminData);
            console.log(adminData);
        }
    });
};