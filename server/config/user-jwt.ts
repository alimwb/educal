import { Strategy, VerifiedCallback } from 'passport-jwt';
import { jwtExtractorFromCookie, decrypt } from '../helpers';
import { envVars } from './envVars';
import { JwtPayload } from 'jsonwebtoken';
import { UserService } from '../services';
import { UnauthorizedErr } from '../helpers/errors';

const jwtStrategy = new Strategy(
  {
    secretOrKey: envVars.jwtSecret,
    jwtFromRequest: jwtExtractorFromCookie,
  },
  async (payload: JwtPayload, cb: VerifiedCallback) => {
    const email = decrypt(payload.email) as string;
    const user = await UserService.getUserByEmail(email);

    if (user === null) {
      cb(new UnauthorizedErr('هویت شما مشخص نیست'));
    }
    else {
      cb(null, user);
    }
  }
);

export { jwtStrategy as userJwtStrategy };
