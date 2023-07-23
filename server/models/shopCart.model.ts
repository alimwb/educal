import mongoose = require('mongoose');
import { shopCartModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const ShopCart = mongoose.model('ShopCart', new Schema<shopCartModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courses: [{ type: Schema.Types.ObjectId, required: true }],
  totalPrice: { type: Schema.Types.Decimal128, required: true },
}));

export { ShopCart };