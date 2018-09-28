var AccessAccount = require('./../../model/access-user.model');

var RegAccount = require('./../../model/register.model');
var AdminAccount = require('./../../model/admin-account.model');

exports.permissionUser = function (req, res) {
    RegAccount.findOne({
        'userType': req.body.userType,
        '_id': req.body._id
    }, function (err, adminDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var adminAccount = new AdminAccount();
            adminAccount.userName = adminDetail.userName,
                adminAccount.userType = adminDetail.userType,
                adminAccount.password = adminDetail.password,
                adminAccount.isActive = 1;
            adminAccount.save(function (err, updatedAccess) {
                if (err) {
                    res.status(500).send({
                        message: "data  not found"
                    });
                } else {
                    RegAccount.findById(req.body._id, function (err, regAcc) {
                        if (err) {
                            console.log('Error:', err);
                        } else {
                            // var regAccount = new RegAccount();
                            regAcc.smsPermission = req.body.smsPermission;
                            regAcc.emailPermission = req.body.emailPermission;
                            regAcc.editPermission = req.body.editPermission;
                            regAcc.deletePermission = req.body.deletePermission;
                            regAcc.save(function (err, regAccount) {
                                if (err) {
                                    res.status(500).send({
                                        message: "data  not found"
                                    });
                                } else {
                                    res.status(200).json(regAccount);
                                }
                            });
                        }
                    });

                }
            });
        }
    });
}
