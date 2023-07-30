import { encrypt } from "../../helpers";
import { ForbiddenErr } from "../../helpers/errors";
import { User } from "../../models";
import { UserService } from "./user.service";
import { userProfileUpdate } from "../../types/interfaces/user";
/**
 * Update a user's info with new data from client.
 * If `tel` or `email` fields are provided, their uniqueness will be checked.
 * 
 * @param id The of the user to update
 * @param data The new data to update the user's info with
 * @returns user's data
 */

async function updateProfileById(this: typeof UserService, id: string, data: userProfileUpdate) {
  const user = await this.getUserById(id);

  if (data.email && (user.email !== data.email)) {
    const duplicateEmail = await this.checkDuplicateEmail(data.email);

    if (duplicateEmail) {
      throw new ForbiddenErr('ایمیل قبلا توسط شخصی ثبت شده است');
    }
  }

  if (data.tel && (user.tel !== data.tel)) {
    const duplicateTel = await this.checkDuplicateTel(data.tel);

    if (duplicateTel) {
      throw new ForbiddenErr('شماره همراه قبلا توسط شخصی ثبت شده است');
    }
  }

  user.tel = 'tel' in data ? encrypt(data.tel) : encrypt(user.tel);
  user.nationalId = 'nationalId' in data ? encrypt(data.nationalId) : encrypt(user.nationalId);
  user.email = 'email' in data ? encrypt(data.email) as string : encrypt(user.email) as string;
  user.firstName = 'firstName' in data ? data.firstName : user.firstName;
  user.lastName = 'lastName' in data ? data.lastName : user.lastName;
  user.avatarUrl = 'avatarUrl' in data ? data.avatarUrl : user.avatarUrl;
  user.originalAvatarUrl = 'originalAvatarUrl' in data ? data.originalAvatarUrl : user.originalAvatarUrl;
  
  await User.updateOne({ _id: id }, user);
  return await this.decryptUserData(user);
}

export { updateProfileById };
