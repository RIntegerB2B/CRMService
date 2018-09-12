'use strict';

var CustomerDetail = require('../model/customer-detail.model');

exports.createCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var customerAccount = new CustomerDetail();
        customerAccount.name = req.body[i].name;
        customerAccount.phone = req.body[i].phone;
        customerAccount.address = req.body[i].address;
        customerAccount.email = req.body[i].email;
        customerAccount.save();
    }

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
            customerAcc.name = req.body.name;
            customerAcc.phone = req.body.phone;
            customerAcc.email = req.body.email;
            customerAcc.address = req.body.address;
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
                    phone: "$phone"
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
            duplicatePhoneNos.push(data[i]._id.phone);
        }
        console.log(duplicatePhoneNos);
        // Please write the query to get all the records with this duplicateNos

        CustomerDetail.find({
            'phone': {
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
