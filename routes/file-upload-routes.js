const express = require('express');
const fileUploadRoutes = express.Router();
 
// include CLOUDINARY:
const {uploader, destroy} = require('../configs/cloudinary-setup.config');
 
fileUploadRoutes.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  // console.log('file is: ', req.file)
 
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.path });
});

//DELETE img from cloudinary
fileUploadRoutes.delete('/delete', (req, res, next) => {
  console.log("req.file:", req.file)
  const image = req.file;
  destroy(image);
});


module.exports = fileUploadRoutes;