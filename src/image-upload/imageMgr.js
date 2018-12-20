var imageDA = require('./imageDA');

exports.uploadImage = function (req, res) {
  try {
    imageDA.uploadImage(req, res)
  } catch (error) {
    console.log(error);
  }
  console.log(req)
}

exports.findImages = function(req,res) {
    try{
        imageDA.findImages(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.deleteImages = function(req,res) {
    try{
        imageDA.deleteImages(req,res)
    }
    catch(error) {
        console.log(error);
    }
}