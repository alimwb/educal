import { Request, Response } from "express";
import { CourseService } from "../../services";
import { middlewareWrapper } from "../../middlewares";

/**
 * 1. get all courses
 * 2. get all courses count
 * 3. send response to client
 */

const controller = [
  middlewareWrapper(async (req: Request, res: Response) => {
    const courses = await CourseService.getAllCoursesByQuery(req.query);
    const coursesCount = await CourseService.getAllCoursesByQueryCount(req.query);

    res.json({
      courses,
      count: coursesCount,
    });
  })
];

export { controller as getAllCourses };
