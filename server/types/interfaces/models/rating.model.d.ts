import { Types } from "mongoose";

interface ratingModel { 
  user: Types.ObjectId;
  course: Types.ObjectId;
  rate: number;
}

export { ratingModel };
