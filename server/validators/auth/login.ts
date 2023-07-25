import { object, string } from 'yup';

const schema = object({
  login: string().required('شماره یا ایمیل باید وارد شود'),
  password: string().required('رمز عبور باید وارد شود'),
});

export { schema as loginInpValidator };
