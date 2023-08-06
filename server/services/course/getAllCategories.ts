import { CourseService } from "./course.service";

/**
 * Get an array of all categories of courses
 * 
 * @returns An array of available categories in database
 */

async function getAllCetegories(this: typeof CourseService) {
  const categories = await this.model.distinct('category');

  return categories;
}

export { getAllCetegories };
