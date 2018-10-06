/* B2cMarket */

var Vendor = require('../model/vendor.model');
exports.createVendors = function (req, res) {
    for (let i = 0; i <= req.body.length-1; i++) {
        var vendor = new Vendor(req.body[i]);
        vendor.vendorName = req.body[i].vendorName;
        vendor.mobileNumber = req.body[i].mobileNumber;
        vendor.whatsAppNo = req.body[i].whatsAppNo;
        vendor.landLine = req.body[i].landLine;
        vendor.email = req.body[i].email;
        vendor.vendorService = req.body[i].vendorService;
        vendor.address = req.body[i].address;
        vendor.vendorCompanyName = req.body[i].vendorCompanyName;
        vendor.companyAddress = req.body[i].companyAddress;
        vendor.vendorGrade = req.body[i].vendorGrade;
        vendor.location = req.body[i].location;
        vendor.gstNumber  = req.body[i].gstNumber;
        
        vendor.save(function (err, fullData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(fullData);
            }
    });   }
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


