import { User } from '../../models';
import {
  getUserByEmail,
  login,
  signup,
  checkDuplicateEmail,
  getUserJWT,
  getUserByTel,
  checkDuplicateTel,
  decryptUserData,
  getUserById,
  updateProfileById,
  uploadAvatarById,
  removeAvatarById,
} from './';

class UserService {
  static users = User;

  static getUserByEmail = getUserByEmail;
  static login = login;
  static signup = signup;
  static checkDuplicateEmail = checkDuplicateEmail;
  static getUserJWT = getUserJWT;
  static getUserByTel = getUserByTel;
  static checkDuplicateTel = checkDuplicateTel;
  static decryptUserData = decryptUserData;
  static getUserById = getUserById;
  static updateProfileById = updateProfileById;
  static uploadAvatarById = uploadAvatarById;
  static removeAvatarById = removeAvatarById;
}

export { UserService };
