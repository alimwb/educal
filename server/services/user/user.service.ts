import { getUserByEmail } from "./";

class UserService {
  public getUserByEmail = getUserByEmail;
  userLogin = require('./userLogin');
}

export { UserService };
