var customerDA = require('./customerDA')



exports.createCustomer = function (req, res) {
    try {
        customerDA.createCustomer(req, res)
   
    } catch (error) {
        console.log(error);
    }
}