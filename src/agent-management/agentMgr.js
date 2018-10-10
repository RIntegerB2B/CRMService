var agentDA = require('./agentDA')



exports.createAgent = function (req, res) {
    try {
        agentDA.createAgent(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleAgent = function (req, res) {
    try {
        agentDA.singleAgent(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.agentEdit = function (req, res) {
    try {
        agentDA.agentEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.agentDelete = function (req, res) {
    try {
        agentDA.agentDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allAgentCustomers = function (req, res) {
    try {
        agentDA.allAgentCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.agentDuplicateData = function (req, res) {
    try {
        agentDA.agentDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}