var imageDA = require('./imageDA');
const multer = require('multer');
var mkdirp = require('mkdirp');
var appSetting = require('../config/appSetting');

exports.uploadImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;

        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
                imageDA.uploadImage(req,file.originalname,res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
                /* console.log(file.originalname); */
            }
        });
        let upload = multer({
            storage: storage
        }).single('file');
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
            //do all database record saving activity
           /*  return res.json({
                originalname: req.file.originalname,
                uploadname: req.file.filename,
                path: PATH
            }); */
        });
        
    } catch (error) {
        console.log(error);
    }
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