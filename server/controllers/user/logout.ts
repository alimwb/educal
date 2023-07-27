import { Request, Response } from "express";
import { middlewareWrapper } from "../../middlewares";
import { passport, envVars } from "../../config";

/**
 * 1. authentication
 * 2. clear authToken cookie
 * 3. send response to client
 */

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(async (req: Request, res: Response) => {
    res.clearCookie('authToken', {
      maxAge: 1000 * 60 * 60 * 24 * 180,
      httpOnly: true,
      signed: true,
      secure: envVars.environment === 'production',
    });

    res.json({
      message: 'با موفقیت خارج شدید',
    });
  })
];

export { controller as logout };
