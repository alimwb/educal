import { Strategy } from 'passport-local';
import { UserService } from '../services';

const localStrategy = new Strategy(
  { usernameField: 'login' },
  async (email, password, done) => {
    try {
      const user = await UserService.login(email, password);

      done(null, user);
    } catch (err) {
      done(err);
    }
  }
);

export { localStrategy as userLocalStrategy };
