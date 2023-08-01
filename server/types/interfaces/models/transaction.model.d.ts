import { Types } from "mongoose";

interface transactionModel {
  transactionId: number;
  _id: string;
  userId: number; // reference to User collection
  cartId: number; // reference to Cart collection
  checkout: Types.Decimal128;
  discount: Types.Decimal128;
  time: Date;
}

export { transactionModel };
