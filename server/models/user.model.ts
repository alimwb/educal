import mongoose = require('mongoose');
import { userModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const User = mongoose.model('User', new Schema<userModel>({
  firstName: { type: String },
  lastName: { type: String },
  tel: { type: String },
  nationalId: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profilePicUrl: { type: String },
  joined: { type: Date, default: Date.now(), required: true },
}));

export { User };
