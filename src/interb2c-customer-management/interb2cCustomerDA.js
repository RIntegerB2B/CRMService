/*  B2cCustomer  */
var InterB2cCustomer = require('../model/interb2c-customer.model');
exports.createInterB2cCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length-1; i++) {
        var interB2cCustomer = new InterB2cCustomer(req.body[i]);
        interB2cCustomer.customerName = req.body[i].customerName;
        interB2cCustomer.gender = req.body[i].gender;
        interB2cCustomer.mobileNumber = req.body[i].mobileNumber;
        interB2cCustomer.email = req.body[i].email;
        interB2cCustomer.dateOfBirth = req.body[i].dateOfBirth;
        interB2cCustomer.nationality = req.body[i].nationality;
        interB2cCustomer.categoryType = req.body[i].categoryType;
        interB2cCustomer.designation = req.body[i].designation;
        interB2cCustomer.location = req.body[i].location;
        interB2cCustomer.save(function (err, fullData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(fullData);
            }
    });   }
}
exports.singleInterB2cCustomer  = function (req, res) {
    var interB2cCustomer = new InterB2cCustomer();
        interB2cCustomer.customerName = req.body.customerName;
        interB2cCustomer.gender = req.body.gender;
        interB2cCustomer.mobileNumber = req.body.mobileNumber;
        interB2cCustomer.email = req.body.email;
        interB2cCustomer.dateOfBirth = req.body.dateOfBirth;
        interB2cCustomer.nationality = req.body.nationality;
        interB2cCustomer.categoryType = req.body.categoryType;
        interB2cCustomer.designation = req.body.designation;
        interB2cCustomer.location = req.body.location;
        interB2cCustomer.save(function (err, contentData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                res.status(200).json(contentData);
            }
});
}

exports.allInterB2cCustomers = function (req, res) {
    InterB2cCustomer.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.interB2cCustomerDetailsEdit = function (req, res) {
    InterB2cCustomer.findById(req.params.id, function (err, interB2cCustomer) {
        if (err) {
            console.log('Error:', err);
        } else {
            interB2cCustomer.customerName = req.body.customerName;
            interB2cCustomer.gender = req.body.gender;
            interB2cCustomer.mobileNumber = req.body.mobileNumber;
            interB2cCustomer.email = req.body.email;
            interB2cCustomer.dateOfBirth = req.body.dateOfBirth;
            interB2cCustomer.nationality = req.body.nationality;
            interB2cCustomer.categoryType = req.body.categoryType;
            interB2cCustomer.designation = req.body.designation;
            interB2cCustomer.location = req.body.location;
            interB2cCustomer.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        InterB2cCustomer.find({}).select().exec(function (err, customerb2c) {
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
exports.interB2cCustomerDetailsDelete = function (req, res) {
    InterB2cCustomer.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            InterB2cCustomer.find({}).select().exec(function (err, deleteAcc) {
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

exports.interB2cCustomerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    InterB2cCustomer.aggregate([{
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

        InterB2cCustomer.find({
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
