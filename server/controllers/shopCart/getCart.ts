import { Request, Response } from "express";
import { middlewareWrapper } from "../../middlewares";
import { ShopCartService } from "../../services";
import { passport } from "../../config";
import { userModel } from "../../types/interfaces/models";

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as Omit<userModel, 'password'>;
    const cart = await ShopCartService.getCart(reqUserObj._id);
    
    if (cart === null) {
      res.json({
        courses: [],
        totalPrice: null,
      });
    }
    else {
      res.json({
        courses: cart.courses,
        totalPrice: cart.totalPrice,
      })
    }
  })
];

export { controller as getCart };
