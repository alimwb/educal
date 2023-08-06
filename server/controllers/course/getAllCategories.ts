import { Request, Response } from "express";
import { middlewareWrapper } from "../../middlewares";
import { CourseService } from "../../services";

const controller = [
  middlewareWrapper(async (req: Request, res: Response) => {
    const categories = await CourseService.getAllCetegories();

    res.json(categories);
  })
];

export { controller as getAllCetegories };
