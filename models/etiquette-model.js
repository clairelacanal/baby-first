const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const etiquetteSchema = new Schema({
  title: String,
  lieu: String,
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    default : 'https://www.stocklib.fr/media-85622929/default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors.html?keyword=avatar'
  },
  commentaire: String,
  author: { type : Schema.Types.ObjectId, ref: 'User' },
}, 
{
  timestamps: true
});

const Etiquette = mongoose.model('Etiquette', etiquetteSchema);

module.exports = Etiquette;