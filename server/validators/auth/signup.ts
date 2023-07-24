import { ref, object, string } from 'yup';

const schema = object({
  email: string()
    .required('ایمیل باید وارد شود')
    .trim()
    .email('ایمیل معتبر نیست'),
  
  password: string()
    .required('رمز عبور باید وارد شود')
    .trim()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر داشته باشد'),

  passwordConfirm: string()
    .required('تکرار رمز عبور باید وارد شود')
    .oneOf([ref('password')], 'رمز عبور یکسان نیست'),
});

export { schema as signupInpValidator };
