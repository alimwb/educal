interface adminModel {
  firstName: string;
  lastName: string;
  access: 'course' | 'comment' | 'transaction';
  password: string;
  tel: string;
  email: string;
  fullAddress?: string;
  nationalId?: string;
  profilePicUrl?: string;
}

export { adminModel };
