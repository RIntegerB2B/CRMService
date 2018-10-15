var UserTypePermssionAccount = require('../../model/permission-userType.model');

// var RegAccount = require('./../../model/register.model');
var AdminAccount = require('./../../model/admin-account.model');

exports.permissionUser = function (req, res) {
    var userTypePermssionAccount = new UserTypePermssionAccount(req.body);
    userTypePermssionAccount.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
            console.log(err);
        } else {
            console.log(data);
            /* res.status(200).json(userTypeData);
            console.log(userTypeData); */
            AdminAccount.find({
                'userType': req.body.userType,
            }, function (err, userTypeData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(userTypeData);
                    console.log(userTypeData);
                }
            });
        }
    });
}

exports.getUserType = function (req, res) {
    UserTypePermssionAccount.find({}).select().exec(function (err, setUserType) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(setUserType);
        }
    });
};