import { Request, Response } from "express";
import { storeValidatedInputs, middlewareWrapper } from "../../middlewares";
import { signupInpValidator } from "../../validators/auth/signup";
import { UserService } from "../../services";
import { sign } from "jsonwebtoken";
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
    const isEmailDuplicate = await UserService.checkDuplicateEmail(res.locals.validBody.email);

    if (isEmailDuplicate) {
      throw new BadRequestErr('ایمیل قبلا ثبت شده است');
    }

    const user = await UserService.signup(res.locals.validBody);
    const jwt = sign(
      { id: user.id, email: user.email },
      envVars.jwtSecret,
    );

    res.cookie('authToken', jwt, {
      maxAge: 1000 * 60 * 60 * 24 * 180,
      httpOnly: true,
      signed: true,
      secure: envVars.environment === 'production',
    });

    const { password, ...userInfo } = user.toObject();
    
    res.json(userInfo);
  }),
]

export { controller as signup };
