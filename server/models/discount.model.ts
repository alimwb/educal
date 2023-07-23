import mongoose = require('mongoose');
import { discountModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Discount = mongoose.model('Discount', new Schema<discountModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  code: { type: String, required: true },
  amount: { type: Number, required: true },
  upLimit: { type: Schema.Types.Decimal128 },
  expire: { type: Date },
}));

export { Discount };
