var ImageModel = require('../model/image.model');
var appSetting = require('../config/appSetting');
var fs = require('fs');

exports.uploadImage = function (req, file, res) {
  var imageModel = new ImageModel(req.body);
  imageModel.imageName = file;
  imageModel.save(function (err, imageSave) {
    if (err) {
      res.status(500).send({
        "message": 'image Not created'
      });
      console.log(err);
    } else {
      res.status(200).json(imageSave);
    }
  });
}
exports.findImages = function (req, res) {
  ImageModel.find({}).select().exec(function (err, imagefind) {
    if (err) {
      res.status(500).send({
        message: 'some thing went to wrong'
      });
    } else {
      res.status(200).json(imagefind);
    }
  });
}

exports.deleteImages = function (req, res) {
  ImageModel.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(500).send({
        message: 'some thing went to wrong'
      });
    } else {
      var imagePath = appSetting.imageUploadPath + '/' + req.params.imageName
      fs.unlink(imagePath, function (err, deleteImage) {
        if (err) {
          res.status(500).send({
            message: 'some thing went to wrong'
          });
        } else {
          res.status(200).json(deleteImage);
        }
      });
    }
  });
}