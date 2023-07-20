const mongoose = require('mongoose');
const { Schema } = mongoose;
const Teacher = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String },
  profilePicUrl: { type: String },
  tel: { type: String },
  email: { type: String },
  fullAddress: { type: String },
  password: { type: String },
  creditCardNum: { type: String },
});

exports = mongoose.model('Teacher', Teacher);
