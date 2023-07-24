import { User } from "../../models";
import { encrypt } from "../../helpers/cipherFunc";

async function getUserByEmail(email: string) {
  const encryptedEmail = encrypt(email);

  return await User.findOne({ email: encryptedEmail });
}

export { getUserByEmail };
