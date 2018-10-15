var loginMgr = require('./logIn/loginMgr');
var registerMgr = require('./register/registerMgr');
var permissionMgr =  require('./permission/permissionMgr')

module.exports = function (app) {
    app.route('/admin')
        .post(loginMgr.createLoginDetail);
    app.route('/admin/validate')
        .post(loginMgr.loginTo);
        app.route('/register')
        .post(registerMgr.createRegisterDetail);
        app.route('/allregister')
        .get(registerMgr.userRegisterDetail);
        app.route('/userdetails')
        .post(permissionMgr.permissionUser);
        app.route('/usertypereg')
        .get(permissionMgr.getUserType);
}