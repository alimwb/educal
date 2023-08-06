import { getAllCoursesQuery } from '../../types/interfaces/queries';
import { CourseService } from './course.service';

/**
 * Using this function we get a list of courses with the given filter.
 *
 * Aggregation pipeline:
 * 1. find the courses with the given categories,
 * 2. populate the teacher into the courses (with teacherId and fullName fields),
 * 3. search through the documents for the name of the teachers matching the fullName given from client,
 * 4. populate the courses ratings average into a field "rating" and get the average of the ratings 
 * (by group operation, there will be only 1 group per courseId),
 * 5. take the one object inside ratings out to access it in the document,
 * 6. add a field "rating" (replace it) to the document equal to rating.avg that we got from group operation,
 * 7. select only the wanted fields,
 * 8. sort the records by date (courseId) then by its rating averate (rateAvg) if they are wanted from client.
 * 
 * NOTE: The stage {$skip: 0} is just used to skip aggregation empty stage error.
 *
 * @param query The query options received from client
 * @returns An array of courses
 */

async function getAllCoursesByQuery(this: typeof CourseService, query: getAllCoursesQuery) {
  const { category, teacher, date, rating } = query;

  const courses = await this.model.aggregate([
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
    // part below does the sorting
    {
      $lookup: {
        from: 'ratings',
        localField: 'courseId',
        foreignField: 'courseId',
        as: 'rating',
        pipeline: [{ $group: { _id: 'courseId', avg: { $avg: '$rate' } } }],
      },
    },
    {
      $addFields: {
        rating: {
          $max: [{ $getField: { field: 'avg', input: { $first: '$rating' } } }, 0],
        },
      },
    },
    {
      $project: {
        courseId: true,
        title: true,
        coverUrl: true,
        category: true,
        teacher: true,
        rating: true,
      },
    },
    date ? { $sort: { courseId: date === 'asc' ? 1 : -1 } } : { $skip: 0 },
    rating ? { $sort: { courseId: rating === 'asc' ? 1 : -1 } } : { $skip: 0 },
  ]);

  return courses;
}

export { getAllCoursesByQuery };
