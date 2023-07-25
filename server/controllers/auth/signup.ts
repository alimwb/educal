import { Request, Response } from "express";
import { storeValidatedInputs, middlewareWrapper } from "../../middlewares";
import { signupInpValidator } from "../../validators/auth/signup";
import { UserService } from "../../services";
import { envVars } from "../../config";
import { BadRequestErr } from "../../helpers/errors";

/**
 * 1. Inputs are validated
 * 2. User is registered in database
 * 3. Auth cookie is set
 * 4. response is sent to client
 */

const controller = [
  middlewareWrapper(storeValidatedInputs(signupInpValidator)),

  middlewareWrapper(async (req: Request, res: Response) => {
    const user = await UserService.signup(res.locals.validBody);
    const token = await UserService.getUserJWT(user);

    res.cookie('authToken', token, {
      maxAge: 1000 * 60 * 60 * 24 * 180,
      httpOnly: true,
      signed: true,
      secure: envVars.environment === 'production',
    });
    
    res.json(user);
  }),
]

export { controller as signup };
