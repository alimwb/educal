import { Request, Response } from "express";
import { middlewareWrapper, checkRouteParamType } from "../../middlewares";
import { UserService } from "../../services";
import { passport } from "../../config";
import { userModel } from "../../types/interfaces/models";

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(checkRouteParamType({ courseId: 'number' })),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as Omit<userModel, 'password'>;
    
    await UserService.addCourseToCart(reqUserObj._id, +req.params.courseId);

    res.json({
      message: 'دوره به سبد خرید اضافه شد',
    });
  }),
];

export { controller as addCourseToCart };
