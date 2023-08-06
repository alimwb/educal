import { getAllCoursesQuery } from '../../types/interfaces/queries';
import { CourseService } from './course.service';

/**
 * Using this function we get the count of courses with the given filter.
 *
 * Aggregation pipeline:
 * 1. find the courses with the given categories
 * 2. populate the teacher into the courses (with teacherId and fullName fields)
 * 3. search through the documents for the name of the teachers matching the fullName given from client (mongodb search operator)
 * 4. count all docs
 *
 * @param query The query options received from client
 * @returns An array of courses
 */

async function getAllCoursesByQueryCount(this: typeof CourseService, query: getAllCoursesQuery) {
  const { category, teacher } = query;
  const coursesCount = await this.model.aggregate([
    category ? { $match: { category: Array.isArray(category) ? { $in: category } : category } } : { $skip: 0 },
    {
      $lookup: {
        from: 'teachers',
        localField: 'teacherId',
        foreignField: 'teacherId',
        as: 'teacher',
        pipeline: [{ $project: { teacherId: true, fullName: true } }],
      },
    },
    { $unwind: '$teacher' },
    teacher ? { $match: { 'teacher.fullName': teacher } } : { $skip: 0 },
    { $count: 'count' }
  ])

  return coursesCount[0].count;
}

export { getAllCoursesByQueryCount };
