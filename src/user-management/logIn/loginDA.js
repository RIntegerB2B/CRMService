var AdminAccount = require('./../../model/admin-account.model');

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
            res.status(200).json(adminDetail[0]);
        }
    });

};

exports.createLoginDetail = function (req, res) {
    var adminAccount = new AdminAccount(req.body);

    adminAccount.save(function (err, adminData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send(adminData);
            console.log(adminData);
        }
    });
};