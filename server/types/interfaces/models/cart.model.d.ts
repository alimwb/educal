import { Types } from "mongoose";
import { courseModel } from "./course.model";

interface cartModel {
  _id: number;
  userId: number;
  coursesIds: number[];
  totalPrice: Types.Decimal128;
  isPaid: boolean;
}

export { cartModel };
