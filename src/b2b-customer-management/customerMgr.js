var customerDA = require('./customerDA')



exports.createCustomer = function (req, res) {
    try {
        customerDA.createCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.customerDetailsEdit = function (req, res) {
    try {
        customerDA.customerDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.customerDetailsDelete = function (req, res) {
    try {
        customerDA.customerDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allCustomers = function (req, res) {
    try {
        customerDA.allCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.singleCustomers = function (req, res) {
    try {
        customerDA.singleCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.customerDuplicateData = function (req, res) {
    try {
        customerDA.customerDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}


