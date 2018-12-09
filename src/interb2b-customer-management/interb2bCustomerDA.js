'use strict';
/*  international b2bMarket */

var InterB2bCustomerDetail = require('../model/interb2b-customer.model');

exports.createInterB2bCustomer = function (req, res) {
    var createInterB2bCustomerData = [];
    for (var i = 0; i <= req.body.length-1; i++) {
        var interB2bCustomerDetail = [];
        interB2bCustomerDetail[i] = new InterB2bCustomerDetail();
        interB2bCustomerDetail[i].customerName = req.body[i].customerName;
        interB2bCustomerDetail[i].countryCode = req.body[i].countryCode;
        interB2bCustomerDetail[i].mobileNumber = req.body[i].mobileNumber;
        interB2bCustomerDetail[i].whatsAppNo = req.body[i].whatsAppNo;
        interB2bCustomerDetail[i].landLine = req.body[i].landLine;
        interB2bCustomerDetail[i].email = req.body[i].email;
        interB2bCustomerDetail[i].companyName = req.body[i].companyName;
        interB2bCustomerDetail[i].companyAddress = req.body[i].companyAddress;
        interB2bCustomerDetail[i].location = req.body[i].location;
        interB2bCustomerDetail[i].country = req.body[i].country;
        interB2bCustomerDetail[i].gstNumber = req.body[i].gstNumber;
        interB2bCustomerDetail[i].customerGrade = req.body[i].customerGrade;
        interB2bCustomerDetail[i].brandName = req.body[i].brandName;
        createInterB2bCustomerData.push(interB2bCustomerDetail[i]);
    }
    InterB2bCustomerDetail.insertMany(createInterB2bCustomerData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.status(500).send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}
exports.singleInterB2bCustomers = function (req, res) {
    var interB2bCustomerAccount = new InterB2bCustomerDetail();
    interB2bCustomerAccount.customerName = req.body.customerName;
    interB2bCustomerAccount.countryCode = req.body.countryCode;
    interB2bCustomerAccount.mobileNumber = req.body.mobileNumber;
    interB2bCustomerAccount.whatsAppNo = req.body.whatsAppNo;
    interB2bCustomerAccount.landLine = req.body.landLine;
    interB2bCustomerAccount.email = req.body.email;
    interB2bCustomerAccount.companyName = req.body.companyName;
    interB2bCustomerAccount.companyAddress = req.body.companyAddress;
    interB2bCustomerAccount.location = req.body.location;
    interB2bCustomerAccount.country = req.body.country;
    interB2bCustomerAccount.gstNumber = req.body.gstNumber;
    interB2bCustomerAccount.customerGrade = req.body.customerGrade;
    interB2bCustomerAccount.brandName = req.body.brandName;
    interB2bCustomerAccount.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
    });
}

/* find all customer details */
exports.allInterB2bCustomer = function (req, res) {
    InterB2bCustomerDetail.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });

}

exports.interB2bCustomerDetailsEdit = function (req, res) {
    InterB2bCustomerDetail.findById(req.params.id, function (err, customerAcc) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerAcc.customerName = req.body.customerName;
            customerAcc.countryCode = req.body.countryCode;
            customerAcc.mobileNumber = req.body.mobileNumber;
            customerAcc.whatsAppNo = req.body.whatsAppNo;
            customerAcc.landLine = req.body.landLine;
            customerAcc.email = req.body.email;
            customerAcc.companyName = req.body.companyName;
            customerAcc.companyAddress = req.body.companyAddress;
            customerAcc.location = req.body.location;
            customerAcc.country = req.body.country;
            customerAcc.gstNumber = req.body.gstNumber;
            customerAcc.customerGrade = req.body.customerGrade;
            customerAcc.brandName = req.body.brandName;
            customerAcc.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        InterB2bCustomerDetail.find({}).select().exec(function (err, customerAcc) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerAcc);
                            }
                        });
                    }
                });

        }
    });

}
// delete details
exports.interB2bCustomerDetailsDelete = function (req, res) {
    InterB2bCustomerDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            InterB2bCustomerDetail.find({}).select().exec(function (err, deleteAcc) {
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

exports.interB2bCustomerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    InterB2bCustomerDetail.aggregate([{
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

        InterB2bCustomerDetail.find({
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






