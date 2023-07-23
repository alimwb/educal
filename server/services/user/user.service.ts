import { getUserByEmail, login, signup } from './';

class UserService {
  static getUserByEmail = getUserByEmail;
  static login = login;
  static signup = signup;
}

export { UserService };
