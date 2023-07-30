import mongoose = require('mongoose');
import { transactionModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Transaction = mongoose.model('Transaction', new Schema<transactionModel>({
  transactionId: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cart: { type: Schema.Types.ObjectId, ref: 'ShopCart', required: true },
  checkout: { type: Schema.Types.Decimal128, required: true },
  discount: { type: String, required: true },
  time: { type: Date, default: Date.now(), required: true },
}));

export { Transaction };
