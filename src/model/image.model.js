
var mongoose = require('mongoose');
var ImageSchema = new mongoose.Schema({
    imageName: String,
    imagePath: String
}); 
const Images = mongoose.model('image', ImageSchema);
module.exports = Images;
