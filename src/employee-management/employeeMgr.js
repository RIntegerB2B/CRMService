var employeeDA = require('./employeeDA')



exports.createEmployee = function (req, res) {
    try {
        employeeDA.createEmployee(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.singleEmployee = function (req, res) {
    try {
        employeeDA.singleEmployee(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.employeeDetailsEdit = function (req, res) {
    try {
        employeeDA.employeeDetailsEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.employeeDetailsDelete = function (req, res) {
    try {
        employeeDA.employeeDetailsDelete(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.allEmployeeCustomers = function (req, res) {
    try {
        employeeDA.allEmployeeCustomers(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.employeeDuplicateData = function (req, res) {
    try {
        employeeDA.employeeDuplicateData(req, res);
    } catch (error) {
        console.log(error);
    }

}