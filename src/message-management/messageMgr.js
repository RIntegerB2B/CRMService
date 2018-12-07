var messageDA = require('./messageDA');
exports.createMessage = function (req, res) {
    try {
        messageDA.createMessage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.messageTemplateDelete = function (req, res) {
    try {
        messageDA.messageTemplateDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.messageTemplateEdit = function (req, res) {
    try {
        messageDA.messageTemplateEdit(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.allMessageTemplate = function (req, res) {
    try {
        messageDA.allMessageTemplate(req, res);
    } catch (error) {
        console.log(error);
    }
}
