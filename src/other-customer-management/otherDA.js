var Others = require('../model/other.model');
exports.createOthers = function (req, res) {
  var createOthersData = [];
  for (var i = 0; i <= req.body.length - 1; i++) {
    var othersDetail = [];
    othersDetail[i] = new Others();
    othersDetail[i].name = req.body[i].name;
    othersDetail[i].gender = req.body[i].gender;
    othersDetail[i].email = req.body[i].email;
    othersDetail[i].mobileNumber = req.body[i].mobileNumber;
    othersDetail[i].location = req.body[i].location;
    othersDetail[i].address = req.body[i].address;
    createOthersData.push(othersDetail[i]);
  }
  Others.insertMany(createOthersData, function (err, sendData) {
    if (err) {
      console.log(err);
      res.status(500).send('Error Data');
    }
    res.status(200).json(sendData);
    console.log('send:', sendData);
  });
}

exports.singleOthers = function (req, res) {
  var othersDetail = new Others();
  othersDetail.name = req.body.name;
  othersDetail.gender = req.body.gender;
  othersDetail.email = req.body.email;
  othersDetail.mobileNumber = req.body.mobileNumber;
  othersDetail.location = req.body.location;
  othersDetail.address = req.body.address;
  othersDetail.save(function (err, contentData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(contentData);
    }
  });
}
exports.allOthersCustomers = function (req, res) {
  Others.find({}).select().exec(function (err, customerAcc) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(customerAcc);
    }
  });
}
exports.othersDetailsEdit = function (req, res) {
  Others.findById(req.params.id, function (err, othrDetail) {
    if (err) {
      console.log('Error:', err);
    } else {
      othrDetail.name = req.body.name;
      othrDetail.gender = req.body.gender;
      othrDetail.email = req.body.email;
      othrDetail.mobileNumber = req.body.mobileNumber;
      othrDetail.location = req.body.location;
      othrDetail.addresss = req.body.addresss;
      othrDetail.save(
        function (err) {
          if (err) { // if it contains error return 0
            res.status(500).send({
              "result": 0
            });
          } else {

            Others.find({}).select().exec(function (err, fullDetails) {
              if (err) {
                res.status(500).send({
                  message: "Some error occurred while retrieving notes."
                });
              } else {
                res.status(200).json(fullDetails);
              }
            });
          }
        });

    }
  });

}
exports.othersDetailsDelete = function (req, res) {
  Others.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(500).send({
        "result": 0
      });
    } else {
      Others.find({}).select().exec(function (err, deleteAcc) {
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

exports.othersDuplicateData = function (req, res) {
  var duplicatePhoneNos = [];
  Others.aggregate([{
      $group: {
        _id: {
          mobileNumber: "$mobileNumber"
        },
        count: {
          "$sum": 1
        }
      }
    },
    {
      $match: {
        count: {
          "$gt": 1
        }
      }
    }
  ]).exec(function (err, data) {
    console.log(res); // [ { maxBalance: 98 } ]
    for (var i = 0; i < data.length; i++) {
      duplicatePhoneNos.push(data[i]._id.mobileNumber);
    }
    console.log(duplicatePhoneNos);
    // Please write the query to get all the records with this duplicateNos

    Others.find({
      'mobileNumber': {
        '$in': duplicatePhoneNos
      }
    }, function (err, duplicateData) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        console.log('duplicateDetails: ', duplicateData);
        res.status(200).json(duplicateData)
      }
    });
  });
};
