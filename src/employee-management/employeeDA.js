var Employee = require('../model/employee.model');
exports.createEmployee = function (req, res) {
    for (let i = 0; i <= req.body.length-1; i++) {
        var employeeDetail = new Employee(req.body[i]);
        employeeDetail.empName = req.body[i].empName;
        employeeDetail.empNo = req.body[i].empNo;
        employeeDetail.whatsappNo = req.body[i].whatsappNo;
        employeeDetail.gender = req.body[i].gender;
        employeeDetail.email = req.body[i].email;
        employeeDetail.mobileNumber = req.body[i].mobileNumber;
        employeeDetail.dateOfBirth = req.body[i].dateOfBirth;   
        employeeDetail.designation = req.body[i].designation;
        employeeDetail.dateOfJoin = req.body[i].dateOfJoin;
        employeeDetail.addresss = req.body[i].addresss;
        employeeDetail.save(function (err, fullData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(fullData);
            }
    });   }
}
exports.singleEmployee  = function (req, res) {
        var employeeDetail = new Employee();
        employeeDetail.empName = req.body.empName;
        employeeDetail.empNo = req.body.empNo;
        employeeDetail.whatsappNo = req.body.whatsappNo;
        employeeDetail.gender = req.body.gender;
        employeeDetail.email = req.body.email;
        employeeDetail.mobileNumber = req.body.mobileNumber;
        employeeDetail.dateOfBirth = req.body.dateOfBirth;   
        employeeDetail.designation = req.body.designation;
        employeeDetail.dateOfJoin = req.body.dateOfJoin;
        employeeDetail.addresss = req.body.addresss;
        employeeDetail.save(function (err, contentData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                res.status(200).json(contentData);
            }
});
}
exports.allEmployeeCustomers = function (req, res) {
    Employee.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.employeeDetailsEdit = function (req, res) {
    Employee.findById(req.params.id, function (err, emplDetail) {
        if (err) {
            console.log('Error:', err);
        } else {
            emplDetail.empName = req.body.empName;
            emplDetail.gender = req.body.gender;
            emplDetail.email = req.body.email;
            emplDetail.mobileNumber = req.body.mobileNumber;
            emplDetail.whatsappNo = req.body.whatsappNo;
            emplDetail.dateOfBirth = req.body.dateOfBirth;
            emplDetail.categoryType = req.body.categoryType;
            emplDetail.designation = req.body.designation;
            emplDetail.addresss = req.body.addresss;
            emplDetail.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        Employee.find({}).select().exec(function (err, customerb2cMarket) {
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
exports.employeeDetailsDelete = function (req, res) {
    Employee.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Employee.find({}).select().exec(function (err, deleteAcc) {
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

exports.employeeDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    Employee.aggregate([{
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

        Employee.find({
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


