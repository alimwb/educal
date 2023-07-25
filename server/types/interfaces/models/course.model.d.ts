import { Types } from "mongoose";

interface courseModel {
  _id: string;
  category: string;
  price: Types.Decimal128;
  skillLevel: 'allLevels' | 'beginner' | 'intermediate' | 'expert';
  teacher: Types.ObjectId; // reference to Teacher collection
  lastUpdate: Date;
  overview?: string | null;
}

export { courseModel };
