const mongoose = require('mongoose');
const { Schema } = mongoose;
const Admin = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  access: { type: String, enum: ['course', 'comment', 'transaction'] },
  password: { type: String },
  tel: { type: String },
  email: { type: String },
  fullAddress: { type: String },
  nationalId: { type: String },
  profilePicUrl: { type: String },
});

exports = mongoose.model('Admin', Admin);
