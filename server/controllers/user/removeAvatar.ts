import { Request, Response } from "express";
import { middlewareWrapper } from "../../middlewares";
import { passport } from "../../config";
import { UserService } from "../../services";
import { userModel } from "../../types/interfaces/models";

/**
 * 1. authentication
 * 2. remove avatar image from cloud and update user's info
 * 3. send response to client
 */

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as Omit<userModel, 'password'>;
    
    await UserService.removeAvatarById(reqUserObj._id);

    res.json({
      message: 'تصویر حذف شد',
    });
  })
];

export { controller as removeAvatar };
