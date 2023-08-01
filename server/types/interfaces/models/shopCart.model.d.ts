import { Types } from "mongoose";
import { courseModel } from "./course.model";

interface shopCartModel {
  cartId: number;
  _id: string;
  userId: number;
  coursesIds: Types.DocumentArray<number>;
  totalPrice: Types.Decimal128;
  isPaid: boolean;
}

export { shopCartModel };
