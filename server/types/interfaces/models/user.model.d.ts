interface userModel {
  _id: string;
  firstName?: string | null;
  lastName?: string | null;
  tel?: string | null;
  nationalId?: string | null;
  email: string;
  password: string;
  profilePicUrl?: string | null;
  joined: Date;
}

export { userModel };
