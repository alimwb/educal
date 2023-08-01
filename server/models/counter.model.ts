import { Schema, model } from 'mongoose';
import { counterModel } from '../types/interfaces/models';

const CounterSchema = new Schema<counterModel>({
  collectionName: { type: String, required: true, unique: true },
  count: { type: Number, required: true },
});

const CounterModel = model('Counter', CounterSchema);

export { CounterModel as Counter };
