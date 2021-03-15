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
    default : 'https://unsplash.com/photos/GQ327RPuxhI'
  },
  commentaire: String,
  author: { type : Schema.Types.ObjectId, ref: 'User' },
}, 
{
  timestamps: true
});

const Etiquette = mongoose.model('Etiquette', etiquetteSchema);

module.exports = Etiquette;