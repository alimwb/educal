import { object, string } from 'yup';

const schema = object({
  email: string()
    .required('ایمیل باید وارد شود.')
    .trim()
    .email('ایمیل معتبر نیست.'),
  
  password: string()
    .required('رمز عبور باید وارد شود.')
    .trim()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر داشته باشد.'),

  passwordConfirm: string().required().test({
    name: 'mathPass',
    message: 'رمز عبور وارد شده یکسان نیست.',
    test: function () {
      this.parent.password === this.parent.passwordConfirm;
    }
  }),
});

export { schema as signupInpValidator };
