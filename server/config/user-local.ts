import { Strategy } from "passport-local";
import { UserService } from '../services';
import { BadRequestErr } from '../helpers/errors';

const localStrategy = new Strategy(
  { usernameField: 'email', session: false },
  async (email, password, done) => {
    const user = await UserService.login(email, password);

    if (user) {
      done(null, user);
    }
    else {
      done(new BadRequestErr('ایمیل یا رمز عبور اشتباه است.'));
    }
  }
);
