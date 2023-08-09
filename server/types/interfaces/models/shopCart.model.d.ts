import { Types } from "mongoose";
import { courseModel } from "./course.model";

interface shopCartModel {
  _id: number;
  userId: number;
  coursesIds: number[];
  totalPrice: Types.Decimal128;
  isPaid: boolean;
}

export { shopCartModel };
