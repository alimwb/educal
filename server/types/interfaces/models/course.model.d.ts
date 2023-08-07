import { Types } from "mongoose";

interface courseModel {
  _id: number;
  title: string;
  coverUrl?: string;
  category: string;
  price: Types.Decimal128;
  skillLevel: 'all' | 'beginner' | 'intermediate' | 'expert';
  teacherId: number;
  lastUpdate: Date;
  overview?: string | null;
}

export { courseModel };
