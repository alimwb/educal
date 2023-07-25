import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";

async function getUserByTel(tel: string) {
  const encryptedTel = encrypt(tel);
  const user = await User.findOne({ tel: encryptedTel });

  if (user === null) {
    throw new NotFoundErr('کاربری با این شماره پیدا نشد');
  }

  user.email = decrypt(user.email) as string;
  user.tel = decrypt(user.tel);
  user.nationalId = decrypt(user.nationalId);

  return user;
}

export { getUserByTel };
