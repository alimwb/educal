import { Types } from "mongoose";
import { courseModel } from "./course.model";

interface shopCartModel {
  user: Types.ObjectId;
  courses: Types.DocumentArray<courseModel>;
  totalPrice: Types.Decimal128;
}

export { shopCartModel };
