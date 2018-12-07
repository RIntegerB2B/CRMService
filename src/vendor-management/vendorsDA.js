/* B2cMarket */

var Vendor = require('../model/vendor.model');
exports.createVendors = function (req, res) {
    var createVendorsData = [];
    for (var i = 0; i <= req.body.length-1; i++) {
        var vendor = [];
        vendor[i] = new Vendor();
        vendor[i].vendorName = req.body[i].vendorName;
        vendor[i].mobileNumber = req.body[i].mobileNumber;
        vendor[i].whatsAppNo = req.body[i].whatsAppNo;
        vendor[i].landLine = req.body[i].landLine;
        vendor[i].email = req.body[i].email;
        vendor[i].vendorService = req.body[i].vendorService;
        vendor[i].address = req.body[i].address;
        vendor[i].vendorCompanyName = req.body[i].vendorCompanyName;
        vendor[i].companyAddress = req.body[i].companyAddress;
        vendor[i].vendorGrade = req.body[i].vendorGrade;
        vendor[i].location = req.body[i].location;
        vendor[i].gstNumber  = req.body[i].gstNumber;
        createVendorsData.push(vendor[i]);
    }
    Vendor.insertMany(createVendorsData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.status(500).send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}


exports.singleVendor  = function (req, res) {
    var vendor = new Vendor();
    vendor.vendorName = req.body.vendorName;
        vendor.mobileNumber = req.body.mobileNumber;
        vendor.whatsAppNo = req.body.whatsAppNo;
        vendor.landLine = req.body.landLine;
        vendor.email = req.body.email;
        vendor.vendorService = req.body.vendorService;
        vendor.address = req.body.address;
        vendor.vendorCompanyName = req.body.vendorCompanyName;
        vendor.companyAddress = req.body.companyAddress;
        vendor.vendorGrade = req.body.vendorGrade;
        vendor.location = req.body.location;
        vendor.gstNumber  = req.body.gstNumber;
        vendor.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
});
}
exports.allVendorsCustomers = function (req, res) {
   
        Vendor.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.vendorsEdit = function (req, res) {
        Vendor.findById(req.params.id, function (err, vendorEdit) {
        if (err) {
            console.log('Error:', err);
        } else {
            vendorEdit.vendorName = req.body.vendorName;
            vendorEdit.mobileNumber = req.body.mobileNumber;
            vendorEdit.whatsAppNo = req.body.whatsAppNo;
            vendorEdit.landLine = req.body.landLine;
            vendorEdit.email = req.body.email;
            vendorEdit.vendorService = req.body.vendorService;
            vendorEdit.address = req.body.address;
            vendorEdit.vendorCompanyName = req.body.vendorCompanyName;
            vendorEdit.companyAddress = req.body.companyAddress;
            vendorEdit.vendorGrade = req.body.vendorGrade;
            vendorEdit.location = req.body.location;
            vendorEdit.gstNumber  = req.body.gstNumber;
            vendorEdit.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        Vendor.find({}).select().exec(function (err, vendorsDetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(vendorsDetails);
                            }
                        });
                    }
                });

        }
    });

}
exports.vendorsDelete = function (req, res) {
    Vendor.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Vendor.find({}).select().exec(function (err, deleteAcc) {
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

exports.vendorDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    Vendor.aggregate([{
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

        Vendor.find({
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


