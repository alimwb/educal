import { encrypt } from "../../helpers";
import { ForbiddenErr } from "../../helpers/errors";
import { User } from "../../models";
import { userProfileUpdateInputs } from "../../types/interfaces/inputs";
import { UserService } from "./user.service";

async function updateProfileById(this: typeof UserService, id: string, data: userProfileUpdateInputs) {
  const user = await this.getUserById(id);

  if (data.email) {
    const duplicateEmail = await this.checkDuplicateEmail(data.email);

    if (duplicateEmail) {
      throw new ForbiddenErr('ایمیل قبلا توسط شخصی ثبت شده است');
    }
  }

  if (data.tel) {
    const duplicateTel = await this.checkDuplicateTel(data.tel);

    if (duplicateTel) {
      throw new ForbiddenErr('شماره همراه قبلا توسط شخصی ثبت شده است');
    }
  }

  user.tel = data.tel ? encrypt(data.tel) : user.tel;
  user.nationalId = data.nationalId ? encrypt(data.nationalId) : user.nationalId;
  user.email = data.email ? encrypt(data.email) as string : user.email;
  user.firstName = data.firstName ? data.firstName : user.firstName;
  user.lastName = data.lastName ? data.lastName : user.lastName;
  
  await User.updateOne({ id }, user);
  return await this.decryptUserData(user);
}

export { updateProfileById };
