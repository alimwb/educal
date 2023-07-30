import mongoose = require('mongoose');
import { ratingModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Rating = mongoose.model('Rating', new Schema<ratingModel>({
  ratingId: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  rate: { type: Number, required: true },  
}));

export { Rating };
