import mongoose = require('mongoose');
import { userModel } from '../types/interfaces/models';

const { Schema } = mongoose;
const User = mongoose.model('User', new Schema<userModel>({
  userId: { type: Number, required: true },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  tel: { type: String, default: null },
  nationalId: { type: String, default: null },
  password: { type: String, required: true },
  email: { type: String, required: true },
  avatarUrl: { type: String, default: null },
  originalAvatarUrl: { type: String, default: null },
  joined: { type: Date, default: Date.now(), required: true },
}));

export { User };
