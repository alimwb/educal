import { getUserByEmail, login, signup, checkDuplicateEmail, getUserJWT, getUserByTel } from './';

class UserService {
  static getUserByEmail = getUserByEmail;
  static login = login;
  static signup = signup;
  static checkDuplicateEmail = checkDuplicateEmail;
  static getUserJWT = getUserJWT;
  static getUserByTel = getUserByTel;
}

export { UserService };
