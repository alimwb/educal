import { User } from "../../models";
import { encrypt } from "../../helpers";

/**
 * Find out if there's already a user with this email address.
 * 
 * @param email the email to look for a duplicate
 * @returns true if there's a duplicate, otherwise false
 */

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
