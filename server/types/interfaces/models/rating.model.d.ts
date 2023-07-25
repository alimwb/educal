import { Types } from "mongoose";

interface ratingModel {
  _id: string;
  user: Types.ObjectId;
  course: Types.ObjectId;
  rate: number;
}

export { ratingModel };
