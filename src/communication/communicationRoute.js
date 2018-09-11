var emailMgr = require('./email/emailMgr');
var notificationMgr = require ('./notification/notificationMgr');
var mobileMgr = require('./mobile/mobileMgr');

module.exports = function (app) {
app.route('/customers/emailId')
        .post(emailMgr.emailSendRequest);
app.route('/customers/phone')
        .post(mobileMgr.mobileSendRequest);


app.route('/pushnotification')
        .post(notificationMgr.pushNotification);

app.route('/pushnotificationsubscribe')
        .post(notificationMgr.addPushSubscriber);
        
}