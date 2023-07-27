import { Strategy, VerifiedCallback } from 'passport-jwt';
import { jwtExtractorFromCookie, decrypt } from '../helpers';
import { envVars } from './envVars';
import { JwtPayload } from 'jsonwebtoken';
import { UserService } from '../services';
import { NotFoundErr, UnauthorizedErr } from '../helpers/errors';

const jwtStrategy = new Strategy(
  {
    secretOrKey: envVars.jwtSecret,
    jwtFromRequest: jwtExtractorFromCookie,
  },
  async (payload: JwtPayload, cb: VerifiedCallback) => {
    const email = decrypt(payload.email) as string;

    try {
      const user = await UserService.getUserByEmail(email);

      if (user === null) {
        cb(new UnauthorizedErr('هویت شما مشخص نیست'));
      } else {
        cb(null, user);
      }
    } catch (err) {
      if (err instanceof NotFoundErr) {
        cb(new UnauthorizedErr('هویت شما مشخص نیست'));
      } else {
        throw err;
      }
    }
  }
);

export { jwtStrategy as userJwtStrategy };
