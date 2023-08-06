import { Course } from "../../models";
import { getAllCetegories, getAllCoursesByQuery, getAllCoursesByQueryCount } from "./";

class CourseService {
  static model = Course;

  static getAllCetegories = getAllCetegories;
  static getAllCoursesByQuery = getAllCoursesByQuery;
  static getAllCoursesByQueryCount = getAllCoursesByQueryCount;
}

export { CourseService };
