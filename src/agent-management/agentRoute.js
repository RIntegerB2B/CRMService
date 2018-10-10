var agentMgr = require('./agentMgr');

module.exports = function (app) {
    app.route('/agent')
        .post(agentMgr.createAgent);
        app.route('/agent/:id')
        .put(agentMgr.agentEdit);
    app.route('/agentdelete/:id')
        .delete(agentMgr.agentDelete);
    app.route('/allagent')
        .get(agentMgr.allAgentCustomers);
    app.route('/duplicateagent')
        .get(agentMgr.agentDuplicateData);
    app.route('/singleagent')
        .post(agentMgr.singleAgent);
}