import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";

/**
 * Find the user based on the given id. 
 * Throws a NotFoundErr if there's not user with this id.
 * 
 * @param id the id to find the user with
 * @returns found user's data
 */

async function getUserById(Id: string) {
  const user = await User.findOne({ Id });

  if (user === null) {
    throw new NotFoundErr('کاربری با این ایمیل پیدا نشد');
  }

  user.email = decrypt(user.email) as string;
  user.tel = decrypt(user.tel);
  user.nationalId = decrypt(user.nationalId);

  const { password, ...userInfo} = user.toObject();

  return userInfo;
}

export { getUserById };
