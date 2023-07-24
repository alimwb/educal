import { getUserByEmail, login, signup, checkDuplicateEmail } from './';

class UserService {
  static getUserByEmail = getUserByEmail;
  static login = login;
  static signup = signup;
  static checkDuplicateEmail = checkDuplicateEmail;
}

export { UserService };
