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
    default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-VfnDe5n-tVS6ZpnKfMekZoX0o_V2_o7gw&usqp=CAU'
  },
  commentaire: String,
  author: { type : Schema.Types.ObjectId, ref: 'User' },
}, 
{
  timestamps: true
});

const Etiquette = mongoose.model('Etiquette', etiquetteSchema);

module.exports = Etiquette;