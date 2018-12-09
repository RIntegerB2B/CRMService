var messageMgr = require('./messageMgr');

module.exports = function (app) {
    app.route('/messagetemplate')
        .post(messageMgr.createMessage);
    app.route('/allmessage')
        .get(messageMgr.allMessageTemplate);
    app.route('/messagedelete/:id')
        .delete(messageMgr.messageTemplateDelete);
    app.route('/messageedit/:id')
        .put(messageMgr.messageTemplateEdit);
        
}