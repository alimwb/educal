import { Request, Response } from "express";
import { middlewareWrapper, checkRouteParamType } from "../../middlewares";
import { CartService } from "../../services";
import { passport } from "../../config";
import { userModel } from "../../types/interfaces/models";

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(checkRouteParamType({ courseId: 'number' })),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as Omit<userModel, 'password'>;
    
    await CartService.removeCourseFromCart(reqUserObj._id, +req.params.courseId);

    res.json({
      message: 'دوره از سبد خرید حذف شد',
    });
  }),
];

export { controller as removeCourseFromCart };
