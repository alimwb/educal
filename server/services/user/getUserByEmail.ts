import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";
import { UserService } from "./user.service";

/**
 * Find the user based on the given email. 
 * Throws a NotFoundErr if there's not user with this email.
 * 
 * @param email the email to find the user with
 * @returns found user's data
 */

async function getUserByEmail(this: typeof UserService, email: string) {
  const encryptedEmail = encrypt(email);
  const user = await User.findOne({ email: encryptedEmail });

  if (user === null) {
    throw new NotFoundErr('کاربری با این ایمیل پیدا نشد');
  }

  const { password, ...userInfo} = user.toObject();

  return await this.decryptUserData(userInfo);
}

export { getUserByEmail };
