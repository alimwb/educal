const mongoose = require('mongoose');
const { Schema } = mongoose;
const Transaction = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: { type: Schema.Types.ObjectId, ref: 'ShopCart' },
  checkout: { type: Schema.Types.Decimal128 },
  discount: { type: String },
  time: { type: Date, default: Date.now() },
});

exports = mongoose.model('Transaction', Transaction);
