import { Types } from "mongoose";

interface discountModel {
  user: Types.ObjectId; // reference to User collection
  course: Types.ObjectId // reference to Course collection
  code: string;
  amount: number;
  upLimit?: Types.Decimal128;
  expire?: Date;
}

export { discountModel };
