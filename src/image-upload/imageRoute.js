var imageMgr = require('./imageMgr');


module.exports = function (app) {
  app.route('/eamilupload')
    .put(imageMgr.uploadImage);
  app.route('/allimage')
        .get(imageMgr.findImages);
  app.route('/imageDelete/:id/imageUrl/:imageName')
        .delete(imageMgr.deleteImages);
}