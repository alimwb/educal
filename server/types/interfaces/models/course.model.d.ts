import { Types } from "mongoose";

interface courseModel {
  courseId: number;
  _id: string;
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
