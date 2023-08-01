import { Schema, model } from 'mongoose';
import { transactionModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const TransactionSchema = new Schema<transactionModel>(
  {
    transactionId: { type: Number, required: true, unique: true, index: true },
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
  foreignField: 'userId',
});

TransactionSchema.virtual('cart', {
  ref: 'ShopCart',
  localField: 'cartId',
  foreignField: 'cartId',
});

TransactionSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'transactions' }, { $inc: { count: 1 } });

  this.transactionId = doc?.count as number;

  next();
});

const TransactionModel = model('Transaction', TransactionSchema);

export { TransactionModel as Transaction };
