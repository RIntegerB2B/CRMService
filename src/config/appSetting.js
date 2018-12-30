module.exports = {
    /* imageServerPath: 'http://localhost/ucchal/',
    imageUploadPath: './emailimage', */
   imageServerPath: process.env.IMAGE_SERVER_PATH || 'http://ucchal.com.com/admin/images/',
  imageUploadPath:process.env.IMAGE_UPLOAD_PATH || '/home/ubuntu/app/rinteger-crm/rinteger-crm/images' ,
}