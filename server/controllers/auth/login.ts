import { Request, Response } from 'express';
import { passport } from '../../config/passportConfig';
import { middlewareWrapper, storeValidatedInputs } from '../../middlewares';
import { loginInpValidator } from '../../validators/auth';
import { UserService } from '../../services';
import { userModel } from '../../types/interfaces/models';
import { envVars } from '../../config';

/**
 * 1. validate client inputs
 * 2. authenticate using provided credentials
 * 3. generate a jwt for user
 * 4. set the authToken cookie (only visible to server)
 * 5. send the data to the client
 */

const controller = [
  middlewareWrapper(storeValidatedInputs(loginInpValidator)),

  passport.authenticate('userLocal', { session: false }),

  middlewareWrapper(async (req: Request, res: Response) => {
    const token = await UserService.getUserJWT(
      req.user as Omit<userModel, 'password'>
    );

    res.cookie('authToken', token, {
      httpOnly: true,
      secure: envVars.environment === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 180,
      signed: true,
    });

    res.json({
      user: req.user,
      message: 'خوش آمدید',
    });
  }),
];

export { controller as login };
