import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";
import { UserService } from "./user.service";

/**
 * Find the user based on the given id. 
 * Throws a NotFoundErr if there's not user with this id.
 * 
 * @param id the id to find the user with
 * @returns user's data
 */

async function getUserById(this: typeof UserService, id: string) {
  const user = await User.findById(id);

  if (user === null) {
    throw new NotFoundErr('کاربری با این شناسه پیدا نشد');
  }

  const { password, ...userInfo} = user.toObject();

  return await this.decryptUserData(userInfo);
}

export { getUserById };
