'use strict';
var loginDA = require('./loginDA');

exports.loginTo = function (req, res) {
    try {
        loginDA.loginTo(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.createLoginDetail = function (req, res) {
    try {
        loginDA.createLoginDetail(req, res);
    } catch (error) {
        console.log(error);
    }

}