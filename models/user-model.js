const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {	
		type: String,
		trim: true,
		required: [true, "Username is required"],
		unique: true
  },

  email : {	
		type: String,
        required: [true, " Email is required"],
        unique: true,
        match: [/.*@.*\..*/, 'Invalid email']
  },

  passwordHash : {	
		type: String,
		required: [true, "Password is required"],
  },

  confirmedpasswordHash : {	
		type: String,
		required: [true, "Password is required"],
  },
}, 
{
  timestamps: new Date()
});

const User = mongoose.model('User', userSchema);

module.exports = User;