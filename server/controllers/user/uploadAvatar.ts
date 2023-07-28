import { Request, Response } from "express";
import { storeImgLocally, passport } from "../../config";
import { middlewareWrapper } from "../../middlewares";
import { UserService } from "../../services";
import { userModel } from "../../types/interfaces/models";
import { BadRequestErr } from "../../helpers/errors";

const controller = [
  passport.authenticate('userJwt', { session: false }),

  storeImgLocally.single('img'),

  middlewareWrapper(async (req: Request, res: Response) => {
    if (req.file === undefined) {
      throw new BadRequestErr('فایلی آپلود نشده است');
    }

    const reqUserObj = req.user as userModel;
    const imgUrl = await UserService.uploadAvatarById(reqUserObj._id, req.file);

    res.json({
      url: imgUrl,
      message: 'تصویر با موفقیت آپلود شد',
    });
  }),
];

export { controller as uploadAvatar };