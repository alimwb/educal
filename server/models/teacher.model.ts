import { Schema, model } from 'mongoose';
import { teacherModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const TeacherSchema = new Schema<teacherModel>({
  teacherId: { type: Number, required: true, unique: true, index: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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

  this.teacherId = doc?.count as number;

  next();
});

const TeacherModel = model('Teacher', TeacherSchema);

export { TeacherModel as Teacher };
