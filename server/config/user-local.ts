import { Strategy } from 'passport-local';
import { UserService } from '../services';
import { UnauthorizedErr } from '../helpers/errors';

const localStrategy = new Strategy(
  { usernameField: 'login' },
  async (email, password, done) => {
    try {
      const user = await UserService.login(email, password);

      done(null, user);
    } catch (err) {
      done(err);
    }


    // if (user) {
    //   done(null, user);
    // }
    // else {
    //   done(new UnauthorizedErr('ایمیل، شماره همراه یا رمز عبور اشتباه است'));
    // }
  }
);

export { localStrategy as userLocalStrategy };
