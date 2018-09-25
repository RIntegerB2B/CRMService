var loginMgr = require('./logIn/loginMgr');
var registerMgr = require('./register/registerMgr');

module.exports = function (app) {
    app.route('/admin')
        .post(loginMgr.createLoginDetail);

    app.route('/admin/validate')
        .post(loginMgr.loginTo);
        app.route('/register')
        .post(registerMgr.createRegisterDetail);
}