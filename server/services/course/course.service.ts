import { Course } from "../../models";
import { getAllCetegories, getAllCoursesByQuery, getAllCoursesByQueryCount, getCourseById } from "./";

class CourseService {
  static model = Course;

  static getAllCetegories = getAllCetegories;
  static getAllCoursesByQuery = getAllCoursesByQuery;
  static getAllCoursesByQueryCount = getAllCoursesByQueryCount;
  static getCourseById = getCourseById;
}

export { CourseService };
