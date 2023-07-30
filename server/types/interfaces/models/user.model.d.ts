interface userModel {
  userId: number;
  _id: string;
  firstName?: string | null;
  lastName?: string | null;
  tel?: string | null;
  nationalId?: string | null;
  email: string;
  password: string;
  avatarUrl?: string | null;
  joined: Date;
}

export { userModel };
