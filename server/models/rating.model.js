const mongoose = require('mongoose');
const { Schema } = mongoose;
const Rating = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  rate: { type: Number },  
});

exports = mongoose.model('Rating', Rating);
