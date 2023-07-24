import mongoose = require('mongoose');
import { adminModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const Admin = mongoose.model('Admin', new Schema<adminModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  access: { type: String, required: true, enum: ['course', 'comment', 'transaction'] },
  password: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  fullAddress: { type: String, default: null },
  nationalId: { type: String, default: null },
  profilePicUrl: { type: String, default: null },
}));

export { Admin };
