var employeeMgr = require('./employeeMgr');

module.exports = function (app) {
    app.route('/employee')
        .post(employeeMgr.createEmployee);
        app.route('/employee/:id')
        .put(employeeMgr.employeeDetailsEdit);
    app.route('/employeedelete/:id')
        .delete(employeeMgr.employeeDetailsDelete);
    app.route('/allemployee')
        .get(employeeMgr.allEmployeeCustomers);
    app.route('/duplicateemployee')
        .get(employeeMgr.employeeDuplicateData);
        app.route('/singleemployee')
        .post(employeeMgr.singleEmployee);

}