var ImageModel = require('../model/image.model');


exports.uploadImage = function (req, res) {
  var imageModel = new ImageModel(req.body);
  imageModel.save(function (err, imageSave) {
    if (err) {
      res.status(500).send({
        "message": 'image Not created'
      });
      console.log(err);
    } else {
      res.status(200).send(imageSave);
      console.log(imageSave);
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
        ImageModel.find({}).select().exec(function (err, deleteImage) {
        if (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving notes."
          });
        } else {
          res.status(200).json(deleteImage);
        }
      });
    }
  });
}