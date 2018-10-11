'use strict';
/*  international b2bMarket */

var InterB2bCustomerDetail = require('../model/interb2b-customer.model');

exports.createInterB2bCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var interB2bCustomerDetail = new InterB2bCustomerDetail();
        interB2bCustomerDetail.customerName = req.body[i].customerName;
        interB2bCustomerDetail.mobileNumber = req.body[i].mobileNumber;
        interB2bCustomerDetail.whatsAppNo = req.body[i].whatsAppNo;
        interB2bCustomerDetail.landLine = req.body[i].landLine;
        interB2bCustomerDetail.email = req.body[i].email;
        interB2bCustomerDetail.companyName = req.body[i].companyName;
        interB2bCustomerDetail.companyAddress = req.body[i].companyAddress;
        interB2bCustomerDetail.location = req.body[i].location;
        interB2bCustomerDetail.gstNumber = req.body[i].gstNumber;
        interB2bCustomerDetail.customerGrade = req.body[i].customerGrade;
        interB2bCustomerDetail.brandName = req.body[i].brandName;
        interB2bCustomerDetail.save(function (err, contentData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(contentData);
            }
        });
    }
}
exports.singleInterB2bCustomers = function (req, res) {
    var interB2bCustomerAccount = new InterB2bCustomerDetail();
    interB2bCustomerAccount.customerName = req.body.customerName;
    interB2bCustomerAccount.mobileNumber = req.body.mobileNumber;
    interB2bCustomerAccount.whatsAppNo = req.body.whatsAppNo;
    interB2bCustomerAccount.landLine = req.body.landLine;
    interB2bCustomerAccount.email = req.body.email;
    interB2bCustomerAccount.companyName = req.body.companyName;
    interB2bCustomerAccount.companyAddress = req.body.companyAddress;
    interB2bCustomerAccount.location = req.body.location;
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
            customerAcc.mobileNumber = req.body.mobileNumber;
            customerAcc.whatsAppNo = req.body.whatsAppNo;
            customerAcc.landLine = req.body.landLine;
            customerAcc.email = req.body.email;
            customerAcc.companyName = req.body.companyName;
            customerAcc.companyAddress = req.body.companyAddress;
            customerAcc.location = req.body.location;
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

                        CustomerDetail.find({}).select().exec(function (err, customerAcc) {
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
            console.log(data[i]._id.mobileNumber);
            duplicatePhoneNos.push(data[i]._id.mobileNumber);
        }
        console.log(duplicatePhoneNos);
        // Please write the query to get all the records with this duplicateNos
        /* CustomerDetail.find({}).select().distinct('mobileNumber').exec(function (err, deleteAcc) {
        {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
           } else {
                        console.log('duplicateDetails: ', deleteAcc);
                        res.status(200).json(deleteAcc);
                    }
            }
        }); */
        // var orginalNumber = [];
        var secondDuplicateNo = [];
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
                for (var j = duplicatePhoneNos.length ; j <= duplicateData.length; j++) {
                    secondDuplicateNo.push(duplicateData[j]);
                    console.log(secondDuplicateNo);
                }
                console.log('duplicateDetails: ', secondDuplicateNo);
                res.status(200).json(secondDuplicateNo);

            }

        });
    });
}






