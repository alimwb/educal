import { Types } from "mongoose";

interface discountModel {
  _id: number;
  userId?: number; // reference to User collection
  courseId?: number // reference to Course collection
  code: string;
  amount: number;
  upLimit?: Types.Decimal128 | null;
  expire?: Date | null;
}

export { discountModel };
