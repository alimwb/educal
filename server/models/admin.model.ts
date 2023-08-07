import { Schema, model } from 'mongoose';
import { adminModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const AdminSchema = new Schema<adminModel>({
  _id: { type: Number },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  access: { type: String, required: true, enum: ['course', 'comment', 'transaction'] },
  password: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  fullAddress: { type: String, default: null },
  nationalId: { type: String, default: null },
  profilePicUrl: { type: String, default: null },
});

AdminSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'admins' }, { $inc: { count: 1 } });

  this._id = doc?.count as number;

  next();
});

const AdminModel = model('Admin', AdminSchema);

export { AdminModel as Admin };
