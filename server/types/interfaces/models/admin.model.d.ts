interface adminModel {
  firstName: string;
  lastName: string;
  access: 'course' | 'comment' | 'transaction';
  password: string;
  tel: string;
  email: string;
  fullAddress?: string | null;
  nationalId?: string | null;
  profilePicUrl?: string | null;
}

export { adminModel };
