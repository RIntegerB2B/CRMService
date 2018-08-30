'use strict';

var CustomerDetail = require('../model/customer-detail.model');

exports.createCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length; i++) {
        var customerAccount = new CustomerDetail();
        customerAccount.name = req.body[i].name;
        customerAccount.phone = req.body[i].phone;
        customerAccount.address = req.body[i].address;
        customerAccount.email= req.body[i].email;
        customerAccount.save(function (err) {
            if (err) {
                res.status(500).send({
                    "result": 0
                });
            } else {
                var value = [];
                for (let i = 0; i <= req.body.length-1; i++){
                value.push(req.body[i])
            }
                res.status(200).json(value);            
                console.log(value);
            }
        });
    }
    
}