import { Schema, model } from 'mongoose';
import { ratingModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const RatingSchema = new Schema<ratingModel>(
  {
    _id: { type: Number },
    userId: { type: Number, required: true },
    courseId: { type: Number, required: true },
    rate: { type: Number, required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

RatingSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
});

RatingSchema.virtual('course', {
  ref: 'Course',
  localField: 'courseId',
  foreignField: '_id',
});

RatingSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'ratings' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const RatingModel = model('Rating', RatingSchema);

export { RatingModel as Rating };
