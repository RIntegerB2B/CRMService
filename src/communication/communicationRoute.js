var emailMgr = require('./emailMgr');

module.exports = function (app) {
app.route('/customer/:emailId')
        .get(emailMgr.emailSendRequest);
}