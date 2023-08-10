import { Schema, model } from 'mongoose';
import { cartModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const CartSchema = new Schema<cartModel>(
  {
    _id: { type: Number },
    userId: { type: Number, required: true },
    coursesIds: [{ type: Number, required: true }],
    totalPrice: { type: Schema.Types.Decimal128, required: true },
    isPaid: { type: Boolean, default: false },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CartSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

CartSchema.virtual('courses', {
  ref: 'Course',
  localField: 'coursesIds',
  foreignField: '_id',
});

CartSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'carts' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const CartModel = model('Cart', CartSchema);

export { CartModel as Cart };
