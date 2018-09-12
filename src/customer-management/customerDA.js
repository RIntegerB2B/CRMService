'use strict';

var CustomerDetail = require('../model/customer-detail.model');

exports.createCustomer = function (req, res) {
    for (let i = 0; i <= req.body.length - 1; i++) {
        var customerAccount = new CustomerDetail();
        customerAccount.name = req.body[i].name;
        customerAccount.phone = req.body[i].phone;
        customerAccount.address = req.body[i].address;
        customerAccount.email = req.body[i].email;
        customerAccount.save();
    }

}
/* find customer details */
exports.allCustomers = function (req, res) {
    CustomerDetail.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });

}

exports.customerDetailsEdit = function (req, res) {
    CustomerDetail.findById(req.params.id, function (err, customerAcc) {
        if (err) {
            console.log('Error:', err);
        } else {
            customerAcc.name = req.body.name;
            customerAcc.phone = req.body.phone;
            customerAcc.email = req.body.email;
            customerAcc.address = req.body.address;
            customerAcc.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {

                        CustomerDetail.find({}).select().exec(function (err, customerAcc) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(customerAcc);
                            }
                        });
                    }
                });

        }
    });

}

exports.customerDetailsDelete = function (req, res) {
    CustomerDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            CustomerDetail.find({}).select().exec(function (err, deleteAcc) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(deleteAcc);
                }
            });
        }
    });
}
/* exports.customerDuplicateData = function (req, res) {
    var customerDetail = new CustomerDetail(req.body);
    //var duplicateNumber = req.body.phone;
    var duplicates = [];
         
    CustomerDetail.aggregate([
        { $group:{
            _id:{phone:"$phone"},
            uniqueId:{$addToSet:"$_id"},
            count:{"$sum":1}
          } 
        },
        { $match:{
            count:{"$gt":1}
         }
        }
        ], function(err, duplicateData){
             if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
          
        res.status(200).json(duplicateData);
        }}
    );
} */

/* exports.customerDuplicateData = function (req, res) {
    var customerDetail = new CustomerDetail(req.body);
    //var duplicateNumber = req.body.phone;
         
    CustomerDetail.aggregate([
        { $group:{
            _id:{phone:"$phone"},
            uniqueId:{$addToSet:"$_id"},
            count:{"$sum":1}
          } 
        },
        { $match:{
            count:{"$gt":1}
         }
        }
        ], function(err, duplicateData){
            if (err) {
           res.status(500).send({
               message: "Some error occurred while retrieving notes."
           });
       } else {
            CustomerDetail.find({'_id': { '$in': duplicateData}}); 
            console.log(duplicateData.group);
       res.status(200).json(duplicateData);
       }}
   );
} 
 */
exports.customerDuplicateData = function (req, res) {
    var duplicatePhoneNos=[];
CustomerDetail.aggregate([
    { $group:{
        _id:{phone:"$phone"},
        count:{"$sum":1}
      } 
    },
    { $match:{
        count:{"$gt":1}
     }
    }
    ]). exec(function (err, res) {
        console.log(res); // [ { maxBalance: 98 } ]
        for(var i=0;i<res.length ;i++){
            duplicatePhoneNos.push(res[i]._id.phone);
        }
        console.log(duplicatePhoneNos);

        // Please write the query to get all the records with this duplicateNos
      });
};


/* CustomerDetail.mapReduce(
    function() {emit(key,value);},  //map function
    function(key,values) {return reduceFunction}, {   //reduce function
       out: CustomerDetail,
       limit: 1
    }
 )
 */

/* exports.customerDuplicateData = function (req, res) {    

CustomerDetail.aggregate([  
  { $match: { 
      phone: { $ne: ''},
  }},
  { $group: { 
      _id: { id: "$id", name: "$name", phone: "$phone", address: "$address"},
      count: { $sum: 1},
      dups: { $push: "$_id"}, 

  }}, 
  { $match: { 
      count: { $gt: 1}
  }}
], function (err, duplicateData) {
    if (err) { // if it contains error return 0
        res.status(500).send({
            "result": 0
        });
    }else {
       console.log(duplicateData);
    }
});
} */
/* exports.customerDuplicateData = function (req, res) {
res = CustomerDetail.mapReduce(function () {
    emit(this.phone, 1);
}, function(key, values){
    return Array.sum(values);
});
CustomerDetail.find({phone: {$gt: 1}});
}  */ 

/* exports.customerDuplicateData = function (req, res) {    

    CustomerDetail.aggregate([  
        {
            $match:
             {
                phone: { $ne: ''}
             }
         },
        {
          $lookup:
           {
              from:"customerDetail",
              
              as:"customerDetails"
           }
         }
    ], function (err, duplicateData) {
        if (err) { // if it contains error return 0
            res.status(500).send({
                "result": 0
            });
        }else {
           console.log(duplicateData);
        }
    });
    }  */


    
    /* var duplicates = [];
    
    db.collectionName.aggregate([
      { $match: { 
        name: { "$ne": '' }  // discard selection criteria
      }},
      { $group: { 
        _id: { name: "$name"}, // can be grouped on multiple properties 
        dups: { "$addToSet": "$_id" }, 
        count: { "$sum": 1 } 
      }}, 
      { $match: { 
        count: { "$gt": 1 }    // Duplicates considered as count greater than one
      }}
    ])               // You can display result until this and check duplicates 
    // If your result getting response in "result" then use else don't use ".result" in query    
    .result          
    .forEach(function(doc) {
        doc.dups.shift();      // First element skipped for deleting
        doc.dups.forEach( function(dupId){ 
            duplicates.push(dupId);   // Getting all duplicate ids
            }
        )    
    }) */