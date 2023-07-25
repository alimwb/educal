import { Types } from "mongoose";

interface discountModel {
  _id: string;
  user: Types.ObjectId; // reference to User collection
  course: Types.ObjectId // reference to Course collection
  code: string;
  amount: number;
  upLimit?: Types.Decimal128 | null;
  expire?: Date | null;
}

export { discountModel };
