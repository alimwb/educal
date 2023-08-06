import { Request, Response } from 'express';
import { CourseService } from '../../services/';
import { middlewareWrapper, checkRouteParamType } from '../../middlewares';

const controller = [
  middlewareWrapper(checkRouteParamType({ id: 'number' })),

  middlewareWrapper(async (req: Request, res: Response) => {
    const course = await CourseService.getCourseById(+req.params.id);

    res.json(course);
  }),
];

export { controller as getCourse };
