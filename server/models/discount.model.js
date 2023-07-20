const mongoose = require('mongoose');
const { Schema } = mongoose;
const Discount = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  code: { type: String },
  percent: { type: Number },
  upLimit: { type: Schema.Types.Decimal128 },
  expire: { type: Date },
});

exports = mongoose.model('Discount', Discount);
