import { Types } from "mongoose";

interface ratingModel {
  ratingId: number;
  _id: string;
  user: Types.ObjectId;
  course: Types.ObjectId;
  rate: number;
}

export { ratingModel };
