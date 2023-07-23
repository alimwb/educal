import mongoose = require('mongoose');
import { courseModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Course = mongoose.model('Course', new Schema<courseModel>({
  category: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true },
  skillLevel: { type: String, required: true, enum: [ 'allLevels', 'beginner', 'intermediate', 'expert'] },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
  lastUpdate: { type: Date, default: Date.now(), required: true },
  overview: { type: String },
}));

export { Course };
