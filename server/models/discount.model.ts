import { Schema, model } from 'mongoose';
import { discountModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const DiscountSchema = new Schema<discountModel>(
  {
    discountId: { type: Number, required: true, unique: true, index: true },
    userId: { type: Number, default: null },
    courseId: { type: Number, default: null },
    code: { type: String, required: true },
    amount: { type: Number, required: true },
    upLimit: { type: Schema.Types.Decimal128, default: null },
    expire: { type: Date, default: null },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

DiscountSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: 'userId',
});

DiscountSchema.virtual('course', {
  ref: 'Course',
  localField: 'courseId',
  foreignField: 'courseId',
});

DiscountSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'discounts' }, { $inc: { count: 1 } });

  this.discountId = doc?.count as number;

  next();
});

const DiscountModel = model('Discount', DiscountSchema);

export { DiscountModel as Discount };
