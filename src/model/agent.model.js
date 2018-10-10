var mongoose = require('mongoose');
var AgentSchema = new mongoose.Schema({
    agentName: String,
    mobileNumber: String,
    whatsAppNo: String,
    landLine: String,
    email: String,
    agentService: String,
    address: String,
    agentCompanyName: String,
    companyAddress: String,
    location: String,
    gstNumber: String,
    agentGrade: String
});

const Agent = mongoose.model('agent', AgentSchema);
module.exports = Agent;