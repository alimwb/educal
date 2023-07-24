import mongoose = require('mongoose');
import { teacherModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Teacher = mongoose.model('Teacher', new Schema<teacherModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  profilePicUrl: { type: String, default: null },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  fullAddress: { type: String, default: null },
  password: { type: String, required: true },
  creditCardNum: { type: String, default: null },
}));

export { Teacher };
