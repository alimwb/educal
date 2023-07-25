interface teacherModel {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  profilePicUrl?: string | null;
  tel: string;
  email: string;
  fullAddress?: string | null;
  password: string;
  creditCardNum?: string | null;
}

export { teacherModel };
