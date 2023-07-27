import { Request, Response } from 'express';
import { UserService } from '../../services';
import { passport } from '../../config';
import { middlewareWrapper, storeValidatedInputs } from '../../middlewares';
import { updateProfileInpValidator } from '../../validators/user/index';
import { userModel } from '../../types/interfaces/models';
import { envVars } from '../../config';

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(storeValidatedInputs(updateProfileInpValidator)),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as userModel;
    const upUser = await UserService.updateProfileById(reqUserObj._id, res.locals.validBody);

    if (res.locals.validBody.email) {
      const token = await UserService.getUserJWT(upUser);

      res.cookie('authToken', token, {
        maxAge: 1000 * 60 * 60 * 24 * 180,
        httpOnly: true,
        signed: true,
        secure: envVars.environment === 'production',
      });
    }

    res.json({
      user: upUser,
      message: 'اطلاعات آپدیت شد',
    })
  }),
];

export { controller as updateProfile };
