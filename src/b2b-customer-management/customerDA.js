'use strict';
/*  b2bcustomer */

var CustomerDetail = require('../model/customer-detail.model');

exports.createCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length-1; i++) {
        var customerAccount = new CustomerDetail();
        customerAccount.customerName = req.body[i].customerName;
        customerAccount.mobileNumber = req.body[i].mobileNumber;
        customerAccount.whatsAppNo = req.body[i].whatsAppNo;
        customerAccount.landLine = req.body[i].landLine;
        customerAccount.email = req.body[i].email;
        customerAccount.companyName = req.body[i].companyName;
        customerAccount.companyAddress = req.body[i].companyAddress;
        customerAccount.location = req.body[i].location;
        customerAccount.gst = req.body[i].gst;
        customerAccount.customerGrade = req.body[i].customerGrade;
        customerAccount.brandName = req.body[i].brandName;
        customerAccount.save(function (err, contentData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(contentData);
            }
    });
 }}
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
            customerAcc.gst = req.body.gst;
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
            duplicatePhoneNos.push(data[i]._id.mobileNumber);
        }
        console.log(duplicatePhoneNos);
        // Please write the query to get all the records with this duplicateNos

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
                console.log('duplicateDetails: ', duplicateData);
                res.status(200).json(duplicateData)
            }
        });
    });
};
