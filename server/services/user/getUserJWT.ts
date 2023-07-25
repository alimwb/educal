import { sign } from 'jsonwebtoken';
import { userModel } from '../../types/interfaces/models';
import { encrypt } from '../../helpers';
import { envVars } from '../../config';

async function getUserJWT(user: Omit<userModel, 'password'>) {
  const encryptedEmail = encrypt(user.email) as string;
  const token = sign(
    { id: user._id, email: encryptedEmail }, 
    envVars.jwtSecret, 
    { expiresIn: '180d' }
  );

  return token;
}

export { getUserJWT };
