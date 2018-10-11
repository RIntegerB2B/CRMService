var mongoose = require('mongoose');
var messageTemplateSchema = new mongoose.Schema({
    messageTitle: String,
    messageDescription: String,
}); 
 
const MessageTemplate = mongoose.model('messagetemplate', messageTemplateSchema);
module.exports = MessageTemplate;