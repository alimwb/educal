import mongoose = require('mongoose');
import { courseModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Course = mongoose.model('Course', new Schema<courseModel>({
  courseId: { type: Number, required: true },
  title: { type: String, required: true },
  coverUrl: { type: String, default: null },
  category: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true },
  skillLevel: { type: String, required: true, enum: [ 'all', 'beginner', 'intermediate', 'expert'] },
  teacher: { type: Number, required: true },
  lastUpdate: { type: Date, default: Date.now(), required: true },
  overview: { type: String, default: null },
}));

export { Course };
