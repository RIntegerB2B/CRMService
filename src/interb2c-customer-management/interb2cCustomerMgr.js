var interb2cCustomerDA = require('./interb2cCustomerDA')



exports.createInterB2cCustomer = function (req, res) {
    try {
        interb2cCustomerDA.createInterB2cCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleInterB2cCustomer = function (req, res) {
    try {
        interb2cCustomerDA.singleInterB2cCustomer(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.interB2cCustomerDetailsEdit = function (req, res) {
    try {
        interb2cCustomerDA.interB2cCustomerDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.interB2cCustomerDetailsDelete = function (req, res) {
    try {
        interb2cCustomerDA.interB2cCustomerDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allInterB2cCustomers = function (req, res) {
    try {
        interb2cCustomerDA.allInterB2cCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.interB2cCustomerDuplicateData = function (req, res) {
    try {
        interb2cCustomerDA.interB2cCustomerDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}