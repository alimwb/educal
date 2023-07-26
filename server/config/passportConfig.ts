import { userLocalStrategy, userJwtStrategy } from "./";
import Passport = require('passport');

const passport = new Passport.Passport();

passport.use('userLocal', userLocalStrategy);
passport.use('userJwt', userJwtStrategy);

export { passport };
