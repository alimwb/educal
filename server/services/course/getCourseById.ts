import { NotFoundErr } from '../../helpers/errors';
import { CourseService } from './course.service';

async function getCourseById(this: typeof CourseService, id: number) {
  const course = await this.model.aggregate([
    { $match: { courseId: id } },
    {
      $lookup: {
        from: 'teachers',
        localField: 'teacherId',
        foreignField: '_id',
        as: 'teacher',
        pipeline: [{ $project: { teacherId: true, fullName: true, role: true, profilePicUrl: true } }],
      },
    },
    { $unwind: '$teacher' },
    {
      $lookup: {
        from: 'ratings',
        localField: 'courseId',
        foreignField: '_id',
        as: 'rating',
        pipeline: [{ $group: { _id: 'courseId', avg: { $avg: 'rate' } } }],
      },
    },
    {
      $addFields: {
        rating: { $max: [{ $getField: { field: 'avg', input: { $first: '$rating' } } }, 0] },
        price: { $toString: '$price' },
      },
    },
    {
      $project: { _id: false, __v: false, teacherId: false },
    },
  ]);

  if (course === null) {
    throw new NotFoundErr('دوره پیدا نشد');
  }

  return course[0];
}

export { getCourseById };
