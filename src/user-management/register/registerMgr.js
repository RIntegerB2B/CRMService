'use strict';
var registerDA = require('./registerDA');

exports.createRegisterDetail = function (req, res) {
    try {
        registerDA.createRegisterDetail(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.userRegisterDetail = function (req, res) {
    try {
        registerDA.userRegisterDetail(req, res);
    } catch (error) {
        console.log(error);
    }

}