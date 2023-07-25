import { User } from "../../models";
import { encrypt } from "../../helpers";

async function checkDuplicateEmail(email: string) {
  const encryptedEmail = encrypt(email);
  const user = await User.findOne({ email: encryptedEmail });

  if (user === null) {
    return false;
  }
  else {
    return true;
  }
}

export { checkDuplicateEmail };
