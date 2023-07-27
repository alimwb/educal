import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";
import { UserService } from "./user.service";

/**
 * Find the user based on the given tel.
 * Throws a NotFoundErr if there's not user with this tel.
 * 
 * @param tel the tel to find the user with
 * @returns found user's data
 */

async function getUserByTel(this: typeof UserService, tel: string) {
  const encryptedTel = encrypt(tel);
  const user = await User.findOne({ tel: encryptedTel });

  if (user === null) {
    throw new NotFoundErr('کاربری با این شماره پیدا نشد');
  }

  const { password, ...userInfo} = user.toObject();

  return await this.decryptUserData(userInfo);
}

export { getUserByTel };
