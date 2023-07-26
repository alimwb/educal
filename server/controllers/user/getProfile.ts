import { Request, Response } from "express";
import { middlewareWrapper } from "../../middlewares";
import { passport } from '../../config';

const controller = [
  passport.authenticate('userJwt', { session: false }),

  middlewareWrapper(async (req: Request, res: Response) => {
    res.json(req.user);
  })
];

export { controller as getProfile };
