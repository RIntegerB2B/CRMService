
var mongoose = require('mongoose');
var ImageSchema = new mongoose.Schema({
    imageName: String,
    imagePath: String
}); 
const Images = mongoose.model('emailimage', ImageSchema);
module.exports = Images;
