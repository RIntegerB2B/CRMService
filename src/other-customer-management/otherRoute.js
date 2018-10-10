var otherMgr = require('./otherMgr');

module.exports = function (app) {
    app.route('/others')
        .post(otherMgr.createOthers);
        app.route('/others/:id')
        .put(otherMgr.othersDetailsEdit);
    app.route('/othersdelete/:id')
        .delete(otherMgr.othersDetailsDelete);
    app.route('/allothers')
        .get(otherMgr.allOthersCustomers);
    app.route('/duplicateothers')
        .get(otherMgr.othersDuplicateData);
        app.route('/singleothers')
        .post(otherMgr.singleOthers);

}