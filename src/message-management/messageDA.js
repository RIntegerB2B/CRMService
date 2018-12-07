var MessageTempl = require('../model/message-template.model');

exports.createMessage = function (req, res) {
    var messageTempl = new MessageTempl();
    messageTempl.messageTitle = req.body.messageTitle;
    messageTempl.messageDescription = req.body.messageDescription;
    messageTempl.save(function (err, messageDescription) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            MessageTempl.find({}).select().exec(function (err, messageDescription) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(messageDescription);
                }
            });
        }
    });
}
exports.allMessageTemplate = function (req, res) {
    MessageTempl.find({}).select().exec(function (err, messageDes) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(messageDes);
        }
    });
}

exports.messageTemplateDelete = function (req, res) {
    MessageTempl.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            MessageTempl.find({}).select().exec(function (err, deleteMessage) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(deleteMessage);
                }
            });
        }
    });
}

exports.messageTemplateEdit = function (req, res) {
    MessageTempl.findById(req.params.id, function (err, messageTempl) {
        if (err) {
            console.log('Error:', err);
        } else {
            messageTempl.messageTitle = req.body.messageTitle;
            messageTempl.messageDescription = req.body.messageDescription;
            messageTempl.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        MessageTempl.find({}).select().exec(function (err, customerAcc) {
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