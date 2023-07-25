import { Types } from "mongoose";
import { courseModel } from "./course.model";

interface shopCartModel {
  _id: string;
  user: Types.ObjectId;
  courses: Types.DocumentArray<courseModel>;
  totalPrice: Types.Decimal128;
  isPaid: boolean;
}

export { shopCartModel };
