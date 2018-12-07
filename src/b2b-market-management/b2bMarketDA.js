'use strict';

var B2bMarket = require('../model/b2b-market.model');
 exports.createB2bMarket = function (req, res) {
    var createB2bMarket = [];
    for (var i = 0; i <= req.body.length - 1; i++) {
      var b2bMarketCustomer = [];
        b2bMarketCustomer[i] = new B2bMarket();
        b2bMarketCustomer[i].customerName = req.body[i].customerName;
        b2bMarketCustomer[i].mobileNumber = req.body[i].mobileNumber;
        b2bMarketCustomer[i].whatsAppNo = req.body[i].whatsAppNo;
        b2bMarketCustomer[i].landLine = req.body[i].landLine;
        b2bMarketCustomer[i].email = req.body[i].email;
        b2bMarketCustomer[i].companyName = req.body[i].companyName;
        b2bMarketCustomer[i].companyAddress = req.body[i].companyAddress;
        b2bMarketCustomer[i].location = req.body[i].location;
        b2bMarketCustomer[i].gstNumber = req.body[i].gstNumber;
        b2bMarketCustomer[i].customerGrade = req.body[i].customerGrade;
        b2bMarketCustomer[i].brandName = req.body[i].brandName;
        createB2bMarket.push(b2bMarketCustomer[i]);
    }
    B2bMarket.insertMany(createB2bMarket, function (err, sendData) {
      if (err) {
        console.log(err);
        res.status(500).send('Error Data');
      }
      res.status(200).json(sendData);
      console.log('send:', sendData);
    });
  }
/* single customer */
 exports.singleB2bMarket  = function (req, res) {
    var b2bMarketCustomer = new B2bMarket();
    b2bMarketCustomer.customerName = req.body.customerName;
    b2bMarketCustomer.mobileNumber = req.body.mobileNumber;
    b2bMarketCustomer.whatsAppNo = req.body.whatsAppNo;
    b2bMarketCustomer.landLine = req.body.landLine;
    b2bMarketCustomer.email = req.body.email;
    b2bMarketCustomer.companyName = req.body.companyName;
    b2bMarketCustomer.companyAddress = req.body.companyAddress;
    b2bMarketCustomer.location = req.body.location;
    b2bMarketCustomer.gstNumber = req.body.gstNumber;
    b2bMarketCustomer.customerGrade = req.body.customerGrade;
    b2bMarketCustomer.brandName = req.body.brandName;
    b2bMarketCustomer.save(function (err, contentData) {
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
exports.allB2bMarketCustomers = function (req, res) {
    B2bMarket.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });

}

exports.b2bMarketDetailsEdit = function (req, res) {
    B2bMarket.findById(req.params.id, function (err, customerb2bMarket) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerb2bMarket.customerName = req.body.customerName;
            customerb2bMarket.mobileNumber = req.body.mobileNumber;
            customerb2bMarket.whatsAppNo = req.body.whatsAppNo;
            customerb2bMarket.landLine = req.body.landLine;
            customerb2bMarket.email = req.body.email;
            customerb2bMarket.companyName = req.body.companyName;
            customerb2bMarket.companyAddress = req.body.companyAddress;
            customerb2bMarket.location = req.body.location;
            customerb2bMarket.gstNumber = req.body.gstNumber;
            customerb2bMarket.customerGrade = req.body.customerGrade;
            customerb2bMarket.brandName = req.body.brandName;
            customerb2bMarket.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        B2bMarket.find({}).select().exec(function (err, customerb2bMarket) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerb2bMarket);
                            }
                        });
                    }
                });

        }
    });

}
// delete details
exports.b2bMarketDetailsDelete = function (req, res) {
    B2bMarket.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            B2bMarket.find({}).select().exec(function (err, deleteAcc) {
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

exports.b2bMarketDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    B2bMarket.aggregate([{
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

        B2bMarket.find({
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
