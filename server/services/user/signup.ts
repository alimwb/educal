import { User } from '../../models';
import { hash } from 'bcryptjs';
import { encrypt } from '../../helpers';
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

  await user.save();
  return user;
}

export { signup };
