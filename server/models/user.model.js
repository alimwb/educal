const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  tel: { type: String },
  nationalId: { type: String },
  password: { type: String },
  email: { type: String },
  profilePicUrl: { type: String },
});

exports = mongoose.model('User', User);
