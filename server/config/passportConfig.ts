import { userLocalStrategy } from "./user-local";
import passport = require('passport');

passport.use('userLocal', userLocalStrategy);

export { passport };
