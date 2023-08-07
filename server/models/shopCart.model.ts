import { Schema, model } from 'mongoose';
import { shopCartModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const ShopCartSchema = new Schema<shopCartModel>(
  {
    _id: { type: Number },
    userId: { type: Number, required: true },
    coursesIds: [{ type: Number, required: true }],
    totalPrice: { type: Schema.Types.Decimal128, required: true },
    isPaid: { type: Boolean, default: false },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ShopCartSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

ShopCartSchema.virtual('courses', {
  ref: 'Course',
  localField: 'coursesIds',
  foreignField: '_id',
});

ShopCartSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'shopcarts' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const ShopCartModel = model('ShopCart', ShopCartSchema);

export { ShopCartModel as ShopCart };
