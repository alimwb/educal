interface teacherModel {
  _id: number;
  fullName: string;
  role: string;
  profilePicUrl?: string | null;
  tel: string;
  email: string;
  fullAddress?: string | null;
  password: string;
  creditCardNum?: string | null;
}

export { teacherModel };
