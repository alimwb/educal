import { User } from '../../models';
import { hash } from 'bcryptjs';
import { encrypt, decrypt } from '../../helpers';
import { signupInp } from '../../types/interfaces/inputs';
import { UserService } from './user.service';
import { BadRequestErr } from '../../helpers/errors';

/**
 * Creates a new user record based on inputs received from client.
 * 
 * @param data the inputs received from client.
 * @returns created user's data
 */

async function signup(this: typeof UserService, data: signupInp) {
  const isEmailDuplicate = await this.checkDuplicateEmail(data.email);

  if (isEmailDuplicate) {
    throw new BadRequestErr('ایمیل قبلا توسط شخصی ثبت شده است');
  }

  const userName = data.email.slice(0, data.email.indexOf('@'));
  const hashedPass = await hash(data.password, 16);
  const user = new User({
    firstName: userName,
    email: encrypt(data.email),
    password: hashedPass,
    joined: Date.now(),
  });

  await user.save();

  user.email = decrypt(user.email) as string;
  user.tel = decrypt(user.tel);
  user.nationalId = decrypt(user.nationalId);

  const { password, ...userInfo } = user.toObject();

  return userInfo;
}

export { signup };
