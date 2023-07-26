import { User } from "../../models";
import { encrypt } from "../../helpers";

/**
 * Find out if there's already a user with this phone number.
 * 
 * @param tel the phone number to look for a duplicate
 * @returns true if there's a duplicate, otherwise false
 */

async function checkDuplicateEmail(tel: string) {
  const encryptedTel = encrypt(tel);
  const user = await User.findOne({ tel: encryptedTel });

  if (user === null) {
    return false;
  }
  else {
    return true;
  }
}

export { checkDuplicateEmail };
