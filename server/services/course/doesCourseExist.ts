import { CourseService } from "./course.service";

/**
 * Check if the course exist by its id field.
 * 
 * @param id The id of the target course
 * @returns `true` if the course exists otherwise `false`
 */

async function doesCourseExist(this: typeof CourseService, id: number) {
  const course = await this.courses.findOne({ _id: id }).select('_id');

  if (course) {
    return true
  }
  else {
    return false;
  }
}

export { doesCourseExist };
