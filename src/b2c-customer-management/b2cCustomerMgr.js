var b2cCustomer = require('./b2cCustomerDA')



exports.createB2cCustomer = function (req, res) {
    try {
        b2cCustomer.createB2cCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleB2cCustomer = function (req, res) {
    try {
        b2cCustomer.singleB2cCustomer(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.b2cCustomerDetailsEdit = function (req, res) {
    try {
        b2cCustomer.b2cCustomerDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.b2cCustomerDetailsDelete = function (req, res) {
    try {
        b2cCustomer.b2cCustomerDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allB2cCustomers = function (req, res) {
    try {
        b2cCustomer.allB2cCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.b2cCustomerDuplicateData = function (req, res) {
    try {
        b2cCustomer.b2cCustomerDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}