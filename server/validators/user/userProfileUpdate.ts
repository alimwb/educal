import { object, string } from "yup";

const schema = object({
  firstName: string()
    .min(1, 'نام باید حداقل شامل ۱ کاراکتر باشد'),
    
  lastName: string()
    .min(1, 'نام خانوادگی حداقل باید شامل ۱ کاراکتر باشد'),

  tel: string()
    .length(11, 'شماره همراه باید شامل ۱۱ رقم باشد'),

  nationalId: string()
    .length(10, 'کد ملی باید شامل ۱۰ رقم باشد'),

  email: string()
    .email('ایمیل معتبر نیست'),
});

export { schema as updateProfileInpValidator };
