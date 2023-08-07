import { Schema, model } from 'mongoose';
import { transactionModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const TransactionSchema = new Schema<transactionModel>(
  {
    _id: { type: Number },
    userId: { type: Number, required: true },
    cartId: { type: Number, required: true },
    checkout: { type: Schema.Types.Decimal128, required: true },
    discount: { type: String, required: true },
    time: { type: Date, default: Date.now(), required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

TransactionSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

TransactionSchema.virtual('cart', {
  ref: 'ShopCart',
  localField: 'cartId',
  foreignField: '_id',
});

TransactionSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'transactions' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const TransactionModel = model('Transaction', TransactionSchema);

export { TransactionModel as Transaction };
