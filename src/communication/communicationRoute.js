var emailMgr = require('./email/emailMgr');
var notificationMgr = require ('./notification/notificationMgr')

module.exports = function (app) {
app.route('/customer/:emailId')
        .get(emailMgr.emailSendRequest);

app.route('/pushnotification')
        .post(notificationMgr.pushNotification);

app.route('/pushnotificationsubscribe')
        .post(notificationMgr.addPushSubscriber);
        
}