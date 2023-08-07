interface userModel {
  _id: number;
  firstName?: string | null;
  lastName?: string | null;
  tel?: string | null;
  nationalId?: string | null;
  email: string;
  password: string;
  avatarUrl?: string | null;
  originalAvatarUrl?: string | null;
  joined: Date;
}

export { userModel };
