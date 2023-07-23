import { compare } from "bcryptjs";
import { UserService } from "./user.service";

async function login(this: UserService,email: string, password: string) {
  const user = await this.getUserByEmail(email);

  if (user === null) {
    return false;
  }

  const doesPassMatch = await compare(password, user.password);

  if (!doesPassMatch) {
    return false;
  }

  return user;
}

export { login };
