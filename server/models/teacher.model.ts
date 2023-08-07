import { Schema, model } from 'mongoose';
import { teacherModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const TeacherSchema = new Schema<teacherModel>({
  _id: { type: Number },
  fullName: { type: String, required: true },
  role: { type: String, required: true },
  profilePicUrl: { type: String, default: null },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  fullAddress: { type: String, default: null },
  password: { type: String, required: true },
  creditCardNum: { type: String, default: null },
});

TeacherSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'teachers' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const TeacherModel = model('Teacher', TeacherSchema);

export { TeacherModel as Teacher };
