var B2cCustomer = require('../model/b2c-customer.model');
exports.createB2cCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var b2cCustomer = new B2cCustomer(req.body[i]);
        b2cCustomer.customerName = req.body[i].customerName;
        b2cCustomer.gender = req.body[i].gender;
        b2cCustomer.mobileNumber = req.body[i].mobileNumber;
        b2cCustomer.email = req.body[i].email;
        b2cCustomer.dateOfBirth = req.body[i].dateOfBirth;
        b2cCustomer.nationality = req.body[i].nationality;
        b2cCustomer.categoryType = req.body[i].categoryType;
        b2cCustomer.designation = req.body[i].designation;
        b2cCustomer.location = req.body[i].location;
        b2cCustomer.save(function (err, fullData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(fullData);
            }
        });
    }
}
exports.allB2cCustomers = function (req, res) {
    B2cCustomer.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.b2cCustomerDetailsEdit = function (req, res) {
    B2cCustomer.findById(req.params.id, function (err, customerb2c) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerb2c.customerName = req.body.customerName;
            customerb2c.gender = req.body.gender;
            customerb2c.mobileNumber = req.body.mobileNumber;
            customerb2c.email = req.body.email;
            customerb2c.dateOfBirth = req.body.dateOfBirth;
            customerb2c.nationality = req.body.nationality;
            customerb2c.categoryType = req.body.categoryType;
            customerb2c.designation = req.body.designation;
            customerb2c.location = req.body.location;
            customerb2c.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        B2cMarket.find({}).select().exec(function (err, customerb2c) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerb2c);
                            }
                        });
                    }
                });

        }
    });

}
exports.b2cCustomerDetailsDelete = function (req, res) {
    B2cCustomer.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            B2cCustomer.find({}).select().exec(function (err, deleteAcc) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(deleteAcc);
                }
            });
        }
    });
}

exports.b2cCustomerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    B2cCustomer.aggregate([{
            $group: {
                _id: {
                    mobileNumber: "$mobileNumber"
                },
                count: {
                    "$sum": 1
                }
            }
        },
        {
            $match: {
                count: {
                    "$gt": 1
                }
            }
        }
    ]).exec(function (err, data) {
        console.log(res); // [ { maxBalance: 98 } ]
        for (var i = 0; i < data.length; i++) {
            duplicatePhoneNos.push(data[i]._id.mobileNumber);
        }
        console.log(duplicatePhoneNos);
        // Please write the query to get all the records with this duplicateNos

        B2cCustomer.find({
            'mobileNumber': {
                '$in': duplicatePhoneNos
            }
        }, function (err, duplicateData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                console.log('duplicateDetails: ', duplicateData);
                res.status(200).json(duplicateData)
            }
        });
    });
};
