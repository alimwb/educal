import { NotFoundErr } from '../../helpers/errors';
import { CourseService } from './course.service';

/**
 * Get the course's data by its id. If there's no course with this id, a NotFoundErr will be thrown.
 * 
 * @param id The id of the target course
 * @returns Course's data
 */

async function getCourseById(this: typeof CourseService, id: number) {
  const course = await this.courses.aggregate([
    { $match: { _id: id } },
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
      $project: { __v: false, teacherId: false },
    },
  ]);

  if (course.length === 0) {
    throw new NotFoundErr('دوره پیدا نشد');
  }

  return course[0];
}

export { getCourseById };
