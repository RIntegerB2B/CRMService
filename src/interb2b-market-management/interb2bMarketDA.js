'use strict';

var InterB2bMarket = require('../model/interb2b-market.model');
exports.createInterB2bMarket = function (req, res) {
    var createData = [];
    for (var i = 0; i <= req.body.length-1; i++) {
        var interB2bMarketCustomer = [];
        interB2bMarketCustomer[i] = new InterB2bMarket();
        interB2bMarketCustomer[i].customerName = req.body[i].customerName;
        interB2bMarketCustomer[i].mobileNumber = req.body[i].mobileNumber;
        interB2bMarketCustomer[i].whatsAppNo = req.body[i].whatsAppNo;
        interB2bMarketCustomer[i].landLine = req.body[i].landLine;
        interB2bMarketCustomer[i].email = req.body[i].email;
        interB2bMarketCustomer[i].companyName = req.body[i].companyName;
        interB2bMarketCustomer[i].companyAddress = req.body[i].companyAddress;
        interB2bMarketCustomer[i].location = req.body[i].location;
        interB2bMarketCustomer[i].gstNumber = req.body[i].gstNumber;
        interB2bMarketCustomer[i].customerGrade = req.body[i].customerGrade;
        interB2bMarketCustomer[i].brandName = req.body[i].brandName;
        createData.push(interB2bMarketCustomer[i]);
    }
    InterB2bMarket.insertMany(createData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.status(500).send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}
/* single customer */
exports.singleInterB2bMarket = function (req, res) {
    var interB2bMarketCustomer = new InterB2bMarket();
    interB2bMarketCustomer.customerName = req.body.customerName;
    interB2bMarketCustomer.countryCode = req.body.countryCode;
    interB2bMarketCustomer.mobileNumber = req.body.mobileNumber;
    interB2bMarketCustomer.whatsAppNo = req.body.whatsAppNo;
    interB2bMarketCustomer.landLine = req.body.landLine;
    interB2bMarketCustomer.email = req.body.email;
    interB2bMarketCustomer.companyName = req.body.companyName;
    interB2bMarketCustomer.companyAddress = req.body.companyAddress;
    interB2bMarketCustomer.location = req.body.location;
    interB2bMarketCustomer.country = req.body.country;
    interB2bMarketCustomer.gstNumber = req.body.gstNumber;
    interB2bMarketCustomer.customerGrade = req.body.customerGrade;
    interB2bMarketCustomer.brandName = req.body.brandName;
    interB2bMarketCustomer.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
    });
}
/* find customer details */
exports.allInterB2bMarketCustomers = function (req, res) {
    InterB2bMarket.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });

}

exports.interB2bMarketDetailsEdit = function (req, res) {
    InterB2bMarket.findById(req.params.id, function (err, customerInterb2bMarket) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerInterb2bMarket.customerName = req.body.customerName;
            customerInterb2bMarket.countryCode = req.body.countryCode;
            customerInterb2bMarket.mobileNumber = req.body.mobileNumber;
            customerInterb2bMarket.whatsAppNo = req.body.whatsAppNo;
            customerInterb2bMarket.landLine = req.body.landLine;
            customerInterb2bMarket.email = req.body.email;
            customerInterb2bMarket.companyName = req.body.companyName;
            customerInterb2bMarket.companyAddress = req.body.companyAddress;
            customerInterb2bMarket.location = req.body.location;
            customerInterb2bMarket.gstNumber = req.body.gstNumber;
            customerInterb2bMarket.country = req.body.country;
            customerInterb2bMarket.customerGrade = req.body.customerGrade;
            customerInterb2bMarket.brandName = req.body.brandName;
            customerInterb2bMarket.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        InterB2bMarket.find({}).select().exec(function (err, interCustomerb2bMarket) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(interCustomerb2bMarket);
                            }
                        });
                    }
                });

        }
    });

}
// delete details
exports.interB2bMarketDetailsDelete = function (req, res) {
    InterB2bMarket.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            InterB2bMarket.find({}).select().exec(function (err, deleteAcc) {
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

// duplicate customer details

exports.interB2bMarketDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    InterB2bMarket.aggregate([{
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

        InterB2bMarket.find({
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
