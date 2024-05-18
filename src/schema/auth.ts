import { passwordPattern } from '@/constants';
import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(1, { message: 'نام کاربری را وارد کنید' }),
  password: z
    .string()
    .min(6, { message: 'رمزعبور حداقل باید 6 کارکتر باشد' })
    .regex(passwordPattern, 'رمز عبور باید شامل اعداد، نماد و حروف انگلیسی(بزرگ/کوچک) باشد'),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'ساختار ایمیل معتبر نیست' }),
  username: z.string().min(1, { message: 'نام کاربری را وارد کنید' }),
  password: z
    .string()
    .min(6, { message: 'رمزعبور حداقل باید 6 کاراکتر باشد' })
    .regex(passwordPattern, 'رمز عبور باید شامل اعداد، نماد و حروف انگلیسی(بزرگ/کوچک) باشد'),
  firstName: z.string().min(1, { message: 'نام را وارد کنید' }),
  lastName: z.string().min(1, { message: 'نام خانوادگی را وارد کنید' }),
  userType: z.enum(['OuterUser', 'InnerUser', 'Company'], {
    required_error: 'نوع کاربر را انتخاب کنید',
  }),
});
