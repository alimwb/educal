import { Schema, model } from 'mongoose';
import { userModel } from '../types/interfaces/models';
import { Counter } from './counter.model';

const UserSchema = new Schema<userModel>({
  userId: { type: Number, required: true, unique: true, index: true },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  tel: { type: String, default: null },
  nationalId: { type: String, default: null },
  password: { type: String, required: true },
  email: { type: String, required: true },
  avatarUrl: { type: String, default: null },
  originalAvatarUrl: { type: String, default: null },
  joined: { type: Date, default: Date.now(), required: true },
});

UserSchema.pre('save', async function (next) {
  const doc = await Counter.findOneAndUpdate({ collectionName: 'users' }, { $inc: { count: 1 } });

  this.userId = doc?.count as number;

  next();
});

const UserModel = model('User', UserSchema);

export { UserModel as User };
