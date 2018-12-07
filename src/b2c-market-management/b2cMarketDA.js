/* B2cMarket */

var B2cMarket = require('../model/b2c-market.model');

exports.createB2cMarket = function (req, res) {
    var createB2cMarketData = [];
    for (var i = 0; i <= req.body.length-1; i++) {
        var b2cMarketCustomer = [];
        b2cMarketCustomer[i] = new B2cMarket();
        b2cMarketCustomer[i].customerName = req.body[i].customerName;
        b2cMarketCustomer[i].gender = req.body[i].gender;
        b2cMarketCustomer[i].mobileNumber = req.body[i].mobileNumber;
        b2cMarketCustomer[i].email = req.body[i].email;
        b2cMarketCustomer[i].dateOfBirth = req.body[i].dateOfBirth;
        b2cMarketCustomer[i].nationality = req.body[i].nationality;
        b2cMarketCustomer[i].categoryType = req.body[i].categoryType;
        b2cMarketCustomer[i].designation = req.body[i].designation;
        b2cMarketCustomer[i].location = req.body[i].location;
        createB2cMarketData.push(b2cMarketCustomer[i]);
    }
    B2cMarket.insertMany(createB2cMarketData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.status(500).send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}
exports.singleB2cMarket  = function (req, res) {
        var b2cMarketCustomer = new B2cMarket();
        b2cMarketCustomer.customerName = req.body.customerName;
        b2cMarketCustomer.gender = req.body.gender;
        b2cMarketCustomer.mobileNumber = req.body.mobileNumber;
        b2cMarketCustomer.email = req.body.email;
        b2cMarketCustomer.dateOfBirth = req.body.dateOfBirth;
        b2cMarketCustomer.nationality = req.body.nationality;
        b2cMarketCustomer.categoryType = req.body.categoryType;
        b2cMarketCustomer.designation = req.body.designation;
        b2cMarketCustomer.location = req.body.location;
        b2cMarketCustomer.save(function (err, contentData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                res.status(200).json(contentData);
            }
});
}
exports.allB2cMarketCustomers = function (req, res) {
    B2cMarket.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.b2cMarketDetailsEdit = function (req, res) {
    B2cMarket.findById(req.params.id, function (err, customerb2cMarket) {
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

                        B2cMarket.find({}).select().exec(function (err, customerb2cMarket) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerb2cMarket);
                            }
                        });
                    }
                });

        }
    });

}
exports.b2cMarketDetailsDelete = function (req, res) {
    B2cMarket.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            B2cMarket.find({}).select().exec(function (err, deleteAcc) {
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

exports.b2cMarketDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    B2cMarket.aggregate([{
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

        B2cMarket.find({
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


