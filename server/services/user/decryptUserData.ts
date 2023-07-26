import { decrypt } from "../../helpers";
import { userModel } from "../../types/interfaces/models";

async function decryptUserData(data: Omit<userModel, 'password'>) {
  const user = { ...data };

  user.email = decrypt(user.email) as string;
  user.nationalId = decrypt(user.nationalId);
  user.tel = decrypt(user.tel);

  return user;
}

export { decryptUserData };
