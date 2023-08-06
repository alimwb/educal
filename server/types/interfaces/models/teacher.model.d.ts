interface teacherModel {
  teacherId: number;
  _id: string;
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
