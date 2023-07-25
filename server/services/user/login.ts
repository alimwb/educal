import { compare } from "bcryptjs";
import { UserService } from "./user.service";
import { userModel } from "../../types/interfaces/models";
import mongoose = require('mongoose');
import { UnauthorizedErr } from "../../helpers/errors";

async function login(this: typeof UserService, login: string, pass: string) {
  let user: userModel & mongoose.Document | null = null;

  // login field is an email
  if (login.includes('@')) {
    user = await this.getUserByEmail(login);
  }
  else {
    user = await this.getUserByTel(login);
  }

  const doesPassMatch = await compare(pass, user!.password);

  if (!doesPassMatch) {
    throw new UnauthorizedErr('ایمیل، شماره همراه یا رمز عبور اشتباه است');
  }

  const { password, ...userInfo } = user!.toObject();

  return userInfo;
}

export { login };
