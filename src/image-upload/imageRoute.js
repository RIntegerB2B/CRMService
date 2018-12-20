var imageMgr = require('./imageMgr');


module.exports = function (app) {
  app.route('/upload')
    .post(imageMgr.uploadImage);
  app.route('/allimage')
        .get(imageMgr.findImages);
  app.route('/imageDelete/:id')
        .delete(imageMgr.deleteImages);
      
}