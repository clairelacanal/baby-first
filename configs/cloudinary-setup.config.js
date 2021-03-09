const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'baby-first',
    allowedFormats: ['jpg', 'png'],
    public_id: (req, file) => file.originalname,
  },
});

const destroyImg = cloudinary.uploader.destroy;
const uploadCloud = multer({ storage });


module.exports = {
  uploader: uploadCloud,
  destroy: destroyImg,
};
