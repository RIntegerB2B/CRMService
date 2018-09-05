var NotificationDetail = require('../../model/notification.model');
const webpush = require('web-push');

exports.pushNotificationOld = function (req, res) {

    NotificationDetail.findOne({
        '_id': req.body._id
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": "Notification from CRM",
                    "body": "Photo Shoot Completed!",
                    "icon": "assets/main-page-logo-small-hat.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            var allSubscriptions= [];
            allSubscriptions.push(subscriptionData.userSubscriptions);
            Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
                    sub, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Newsletter sent successfully.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });




};

exports.pushNotificationToAdmin = function (req, res) {
    var notificationDetail = new NotificationDetail(req.body);
    NotificationDetail.find({
        'isAdmin': true
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": req.body.title,
                    "body": req.body.notificationBody,
                    "icon": "assets/rinteger.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Push Notificatoin Successfull.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });
};

exports.pushNotificationToUsers = function (req, res) {
    var notificationDetail = new NotificationDetail(req.body);
    NotificationDetail.find({
        'mobileNumber': notificationDetail.mobileNumber
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": req.body.title,
                    // "title": "Sample title",
                   "body": req.body.notificationBody,
                  "body": "Booking No: 1234 - Photo Shoot Completed",
                    "icon": "assets/rinteger.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Push notification sent successfully.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });
};

exports.notificationSubscription = function (req, res) {
    var notification = new NotificationDetail(req.body);
    notification.save(function (err, notfn) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).json({
                message: "Subscription added successfully."
            });
            console.log(notfn);
        }
    });
};