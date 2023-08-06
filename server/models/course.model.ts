import { Schema, model } from 'mongoose';
import { courseModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const CourseSchema = new Schema<courseModel>(
  {
    courseId: { type: Number, required: true, unique: true, index: true },
    title: { type: String, required: true },
    coverUrl: { type: String, default: null },
    category: { type: String, required: true },
    price: { type: Schema.Types.Decimal128, required: true },
    skillLevel: { type: String, required: true, enum: ['all', 'beginner', 'intermediate', 'expert'] },
    teacherId: { type: Number, required: true },
    lastUpdate: { type: Date, default: Date.now(), required: true },
    overview: { type: String, default: null },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CourseSchema.virtual('teacher', {
  ref: 'Teacher',
  localField: 'teacherId',
  foreignField: 'teacherId',
});

CourseSchema.virtual('ratings', {
  ref: 'Rating',
  localField: 'courseId',
  foreignField: 'courseId',
});

CourseSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'courses' }, { $inc: { count: 1 } });

  this.courseId = doc?.count as number;

  next();
});

const CouseModel = model('Course', CourseSchema);

export { CouseModel as Course };
