var notificationDA = require('./notificationDA');
const webpush = require('web-push');

/* const vapidKeys = {
    "publicKey": "BEe66AvTCe_qowysFNV2QsGWzgEDnUWAJq1ytVSXxtwqjcf0bnc6d5USXmZOnIu6glj1BFcj87jIR5eqF2WJFEY",
    "privateKey": "M75vu-773ly2mBZ3LdaUCzC-A8aK9p4UuNZFEawXXNo"
}
 */
const vapidKeys = {
    "publicKey": "BGHtAXM55prP54aRNFOsxxpY4si_jdMiGnoUQSJuy_N7ou9TmNblSflGyfoC6IQzaq0uk53FCqh8uwFE0f7xeeg",
    "privateKey": "jqy0Ycrk2kDCC7j2_W92bNxdcDz2vbLzBye4NRinoEk"
};

/* const vapidKeys = webpush.generateVAPIDKeys();
 
// Prints 2 URL Safe Base64 Encoded Strings
console.log(vapidKeys.publicKey, vapidKeys.privateKey);
 */


// Prints 2 URL Safe Base64 Encoded Strings

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey,
);


exports.pushNotification = function (req, res) {
    if (req.body.isAdmin) {
        notificationDA.pushNotificationToAdmin(req, res);
    }
        else
            notificationDA.pushNotificationToUsers(req, res);

}
exports.addPushSubscriber = function (req, res)
{
    const sub = req.body;
    console.log('Received Subscription on the server:', sub);
    notificationDA.notificationSubscription(req, res);
}