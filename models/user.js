const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id}, 'jwtPrivateKey');
  return token;
}

const User = mongoose.model('User', userSchema);

exports.User = User; 