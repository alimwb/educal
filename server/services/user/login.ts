import { User } from "../../models";
import { compare } from "bcryptjs";
import { UserService } from "./user.service";
import { UnauthorizedErr } from "../../helpers/errors";
import { encrypt } from "../../helpers";

/**
 * Login the user using the credentials provided from client.
 * Thorws Unauthorized Error if there's no user found with these credentials.
 * 
 * @param login user's `tel` or `email` fields from client inputs
 * @param pass user's `password` field from client inputs
 * @returns logged in user data
 */

async function login(this: typeof UserService, login: string, pass: string) {
  let user = await User.findOne({
    $or: [
      { email: encrypt(login) },
      { tel: encrypt(login) },
    ]
  });

  if (user === null) {
    throw new UnauthorizedErr('ایمیل، شماره همراه یا رمز عبور اشتباه است');
  }

  const doesPassMatch = await compare(pass, user!.password);

  if (!doesPassMatch) {
    throw new UnauthorizedErr('ایمیل، شماره همراه یا رمز عبور اشتباه است');
  }

  const { password, ...userInfo } = user!.toObject();

  return this.decryptUserData(userInfo);
}

export { login };
