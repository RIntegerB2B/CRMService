/* B2cMarket */

var Agent = require('../model/agent.model');
exports.createAgent = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var agent = new Agent(req.body[i]);
        agent.agentName = req.body[i].agentName;
        agent.mobileNumber = req.body[i].mobileNumber;
        agent.whatsAppNo = req.body[i].whatsAppNo;
        agent.landLine = req.body[i].landLine;
        agent.email = req.body[i].email;
        agent.agentService = req.body[i].agentService;
        agent.address = req.body[i].address;
        agent.agentCompanyName = req.body[i].agentCompanyName;
        agent.companyAddress = req.body[i].companyAddress;
        agent.agentGrade = req.body[i].agentGrade;
        agent.location = req.body[i].location;
        agent.gstNumber = req.body[i].gstNumber;
        agent.save(function (err, fullData) {
            if (err) {
                res.send(err);
                console.log(err);
            } else {
                res.end();
                console.log(fullData);
            }
        });
    }
}
exports.singleAgent = function (req, res) {
    var agent = new Agent();
    agent.agentName = req.body.agentName;
    agent.mobileNumber = req.body.mobileNumber;
    agent.whatsAppNo = req.body.whatsAppNo;
    agent.landLine = req.body.landLine;
    agent.email = req.body.email;
    agent.agentService = req.body.agentService;
    agent.address = req.body.address;
    agent.agentCompanyName = req.body.agentCompanyName;
    agent.companyAddress = req.body.companyAddress;
    agent.agentGrade = req.body.agentGrade;
    agent.location = req.body.location;
    agent.gstNumber = req.body.gstNumber;
    agent.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
    });
}
exports.allAgentCustomers = function (req, res) {

    Agent.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.agentEdit = function (req, res) {
    Agent.findById(req.params.id, function (err, agEdit) {
        if (err) {
            console.log('Error:', err);
        } else {
            agEdit.agentName = req.body.agentName;
            agEdit.mobileNumber = req.body.mobileNumber;
            agEdit.whatsAppNo = req.body.whatsAppNo;
            agEdit.landLine = req.body.landLine;
            agEdit.email = req.body.email;
            agEdit.agentService = req.body.agentService;
            agEdit.address = req.body.address;
            agEdit.agentCompanyName = req.body.agentCompanyName;
            agEdit.companyAddress = req.body.companyAddress;
            agEdit.agentGrade = req.body.agentGrade;
            agEdit.location = req.body.location;
            agEdit.gstNumber = req.body.gstNumber;
            agEdit.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        Agent.find({}).select().exec(function (err, agentDetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(agentDetails);
                            }
                        });
                    }
                });

        }
    });

}
exports.agentDelete = function (req, res) {
    Agent.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Agent.find({}).select().exec(function (err, deleteAcc) {
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

exports.agentDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    Agent.aggregate([{
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

        Agent.find({
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
