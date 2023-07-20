const mongoose = require('mongoose');
const { Schema } = mongoose;
const ShopCart = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  courses: [{ type: Schema.Types.ObjectId }],
  totalPrice: { type: Schema.Types.Decimal128 },
});

exports = mongoose.model('ShopCart', ShopCart);
