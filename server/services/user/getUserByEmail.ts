import { User } from "../../models";
import { encrypt, decrypt } from "../../helpers/cipherFunc";
import { NotFoundErr } from "../../helpers/errors";

async function getUserByEmail(email: string) {
  const encryptedEmail = encrypt(email);
  const user = await User.findOne({ email: encryptedEmail });

  if (user === null) {
    throw new NotFoundErr('کاربری با این ایمیل پیدا نشد');
  }

  user.email = decrypt(user.email) as string;
  user.tel = decrypt(user.tel);
  user.nationalId = decrypt(user.nationalId);

  return user;
}

export { getUserByEmail };
