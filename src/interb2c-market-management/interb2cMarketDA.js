/* international B2cMarket */

var InterB2cMarket = require('../model/interb2c-market.model');
exports.createinterB2cMarket = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var interB2cMarket = new InterB2cMarket(req.body[i]);
        interB2cMarket.customerName = req.body[i].customerName;
        interB2cMarket.gender = req.body[i].gender;
        interB2cMarket.mobileNumber = req.body[i].mobileNumber;
        interB2cMarket.email = req.body[i].email;
        interB2cMarket.dateOfBirth = req.body[i].dateOfBirth;
        interB2cMarket.nationality = req.body[i].nationality;
        interB2cMarket.categoryType = req.body[i].categoryType;
        interB2cMarket.designation = req.body[i].designation;
        interB2cMarket.location = req.body[i].location;
        interB2cMarket.save(function (err, fullData) {
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
exports.singleInterB2cMarket = function (req, res) {
    var interB2cMarketCustomer = new InterB2cMarket();
    interB2cMarketCustomer.customerName = req.body.customerName;
    interB2cMarketCustomer.gender = req.body.gender;
    interB2cMarketCustomer.mobileNumber = req.body.mobileNumber;
    interB2cMarketCustomer.email = req.body.email;
    interB2cMarketCustomer.dateOfBirth = req.body.dateOfBirth;
    interB2cMarketCustomer.nationality = req.body.nationality;
    interB2cMarketCustomer.categoryType = req.body.categoryType;
    interB2cMarketCustomer.designation = req.body.designation;
    interB2cMarketCustomer.location = req.body.location;
    interB2cMarketCustomer.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
    });
}
exports.allInterB2cMarketCustomers = function (req, res) {
    InterB2cMarket.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.interB2cMarketDetailsEdit = function (req, res) {
    InterB2cMarket.findById(req.params.id, function (err, customerb2cMarket) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerb2cMarket.customerName = req.body.customerName;
            customerb2cMarket.gender = req.body.gender;
            customerb2cMarket.mobileNumber = req.body.mobileNumber;
            customerb2cMarket.email = req.body.email;
            customerb2cMarket.dateOfBirth = req.body.dateOfBirth;
            customerb2cMarket.nationality = req.body.nationality;
            customerb2cMarket.categoryType = req.body.categoryType;
            customerb2cMarket.designation = req.body.designation;
            customerb2cMarket.location = req.body.location;
            customerb2cMarket.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        InterB2cMarket.find({}).select().exec(function (err, customerInterB2cMarket) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerInterB2cMarket);
                            }
                        });
                    }
                });

        }
    });

}
exports.interB2cMarketDetailsDelete = function (req, res) {
    InterB2cMarket.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            InterB2cMarket.find({}).select().exec(function (err, deleteAcc) {
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

exports.interB2cMarketDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    InterB2cMarket.aggregate([{
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

        InterB2cMarket.find({
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
