import { User } from '../../models';
import { hash } from 'bcryptjs';
import { encrypt, decrypt } from '../../helpers';
import { signupInp } from '../../types/interfaces/inputs';

/**
 * Creates a new user record based on inputs received from client.
 * @param data the inputs received from client.
 * @returns created user's data
 */

async function signup(data: signupInp) {
  const userName = data.email.slice(0, data.email.indexOf('@'));
  const hashedPass = await hash(data.password, 16);
  const user = new User({
    firstName: userName,
    email: encrypt(data.email),
    password: hashedPass,
    joined: Date.now(),
  });

  user.email = decrypt(user.email) as string;
  user.tel = decrypt(user.tel);
  user.nationalId = decrypt(user.nationalId);

  await user.save();

  const { password, ...userInfo } = user.toObject();

  return userInfo;
}

export { signup };
