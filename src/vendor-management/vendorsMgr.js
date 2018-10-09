var vendorsDA = require('./vendorsDA')



exports.createVendors = function (req, res) {
    try {
        vendorsDA.createVendors(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleVendor = function (req, res) {
    try {
        vendorsDA.singleVendor(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.vendorsEdit = function (req, res) {
    try {
        vendorsDA.vendorsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.vendorsDelete = function (req, res) {
    try {
        vendorsDA.vendorsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allVendorsCustomers = function (req, res) {
    try {
        vendorsDA.allVendorsCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.vendorDuplicateData = function (req, res) {
    try {
        vendorsDA.vendorDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}