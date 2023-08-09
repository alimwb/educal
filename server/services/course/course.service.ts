import { Course } from "../../models";
import { getAllCetegories, getAllCoursesByQuery, getAllCoursesByQueryCount, getCourseById, doesCourseExist, } from "./";

class CourseService {
  static courses = Course;

  static getAllCetegories = getAllCetegories;
  static getAllCoursesByQuery = getAllCoursesByQuery;
  static getAllCoursesByQueryCount = getAllCoursesByQueryCount;
  static getCourseById = getCourseById;
  static doesCourseExist = doesCourseExist;
}

export { CourseService };
