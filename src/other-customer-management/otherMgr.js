var otherDA = require('./otherDA')



exports.createOthers = function (req, res) {
    try {
        otherDA.createOthers(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleOthers = function (req, res) {
    try {
        otherDA.singleOthers(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.allOthersCustomers = function (req, res) {
    try {
        otherDA.allOthersCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.othersDetailsEdit = function (req, res) {
    try {
        otherDA.othersDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.othersDetailsDelete = function (req, res) {
    try {
        otherDA.othersDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.othersDuplicateData = function (req, res) {
    try {
        otherDA.othersDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}