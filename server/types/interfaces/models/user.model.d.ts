interface userModel {
  firstName: string;
  lastName: string;
  tel?: string;
  nationalId?: string;
  email: string;
  password: string;
  profilePicUrl?: string;
  joined: Date;
}

export { userModel };
