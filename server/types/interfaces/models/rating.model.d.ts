interface ratingModel {
  ratingId: number;
  _id: string;
  userId: number;
  courseId: number;
  rate: number;
}

export { ratingModel };
