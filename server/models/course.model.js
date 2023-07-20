const mongoose = require('mongoose');
const { Schema } = mongoose;
const Course = new Schema({
  category: { type: String },
  price: { type: Schema.Types.Decimal128 },
  skillLevel: { type: String, enum: [ 'allLevels', 'beginner', 'intermediate', 'expert'] },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  lastUpdate: { type: Date, default: Date.now() },
  overview: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

exports = mongoose.model('Course', Course);
