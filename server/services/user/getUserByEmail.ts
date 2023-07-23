import { User } from "../../models";

async function getUserByEmail(email: string) {
  return await User.findOne({ email });
}

export { getUserByEmail };
