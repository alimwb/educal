import { Request, Response } from 'express';
import { UserService } from '../../services';
import { passport } from '../../config';
import { middlewareWrapper, storeValidatedInputs } from '../../middlewares';
import { updateProfileInpValidator } from '../../validators/user/index';
import { userModel } from '../../types/interfaces/models';
import { envVars } from '../../config';

/**
 * 1. authentication
 * 2. validate client inputs
 * 3. update user's info
 * 4. check if the email is changed, if yes, set a new auth token
 * 5. send user's data to client
 */

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(storeValidatedInputs(updateProfileInpValidator)),

  middlewareWrapper(async (req: Request, res: Response) => {
    const reqUserObj = req.user as userModel;
    const upUser = await UserService.updateProfileById(reqUserObj._id, res.locals.validBody);

    if (upUser.email !== reqUserObj.email) {
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
