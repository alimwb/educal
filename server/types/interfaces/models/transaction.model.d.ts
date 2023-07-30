import { Types } from "mongoose";

interface transactionModel {
  transactionId: number;
  _id: string;
  user: Types.ObjectId; // reference to User collection
  cart: Types.ObjectId; // reference to Cart collection
  checkout: Types.Decimal128;
  discount: Types.Decimal128;
  time: Date;
}

export { transactionModel };
