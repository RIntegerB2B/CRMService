'use strict';
var permissionDA = require('./permissionDA');

exports.permissionUser = function (req, res) {
    try {
        permissionDA.permissionUser(req, res);
    } catch (error) {
        console.log(error);
    }

}