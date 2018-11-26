'use strict';
/*  b2bCustomer */

var CustomerDetail = require('../model/customer-detail.model');

exports.createCustomer = function (req, res) {
    var createCustomerData = [];
    for (var i = 0; i <= req.body.length-1; i++) {
        var customerAccount = [];
        customerAccount[i] = new CustomerDetail();
        customerAccount[i].customerName = req.body[i].customerName;
        customerAccount[i].mobileNumber = req.body[i].mobileNumber;
        customerAccount[i].whatsAppNo = req.body[i].whatsAppNo;
        customerAccount[i].landLine = req.body[i].landLine;
        customerAccount[i].email = req.body[i].email;
        customerAccount[i].companyName = req.body[i].companyName;
        customerAccount[i].companyAddress = req.body[i].companyAddress;
        customerAccount[i].location = req.body[i].location;
        customerAccount[i].gstNumber = req.body[i].gstNumber;
        customerAccount[i].customerGrade = req.body[i].customerGrade;
        customerAccount[i].brandName = req.body[i].brandName;
        createCustomerData.push(customerAccount[i]);
    }
    CustomerDetail.insertMany(createCustomerData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.status(500).send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}

exports.singleCustomers = function (req, res) {
    var customerAccount = new CustomerDetail();
    customerAccount.customerName = req.body.customerName;
    customerAccount.mobileNumber = req.body.mobileNumber;
    customerAccount.whatsAppNo = req.body.whatsAppNo;
    customerAccount.landLine = req.body.landLine;
    customerAccount.email = req.body.email;
    customerAccount.companyName = req.body.companyName;
    customerAccount.companyAddress = req.body.companyAddress;
    customerAccount.location = req.body.location;
    customerAccount.gstNumber = req.body.gstNumber;
    customerAccount.customerGrade = req.body.customerGrade;
    customerAccount.brandName = req.body.brandName;
    customerAccount.save(function (err, contentData) {
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
exports.allCustomers = function (req, res) {
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

exports.customerDetailsEdit = function (req, res) {
    CustomerDetail.findById(req.params.id, function (err, customerAcc) {
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
exports.customerDetailsDelete = function (req, res) {
    CustomerDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            CustomerDetail.find({}).select().exec(function (err, deleteAcc) {
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

exports.customerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    CustomerDetail.aggregate([{
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
        CustomerDetail.find({
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