var interb2bCustomerDA = require('./interb2bCustomerDA')



exports.createInterB2bCustomer = function (req, res) {
    try {
        interb2bCustomerDA.createInterB2bCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.interB2bCustomerDetailsEdit = function (req, res) {
    try {
        interb2bCustomerDA.interB2bCustomerDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.interB2bCustomerDetailsDelete = function (req, res) {
    try {
        interb2bCustomerDA.interB2bCustomerDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allInterB2bCustomer = function (req, res) {
    try {
        interb2bCustomerDA.allInterB2bCustomer(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.singleInterB2bCustomers = function (req, res) {
    try {
        interb2bCustomerDA.singleInterB2bCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.interB2bCustomerDuplicateData = function (req, res) {
    try {
        interb2bCustomerDA.interB2bCustomerDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}


