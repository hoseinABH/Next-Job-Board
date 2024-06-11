import { passwordPattern } from '@/constants';
import { z } from 'zod';

const passwordValidation = z
  .string()
  .min(6, { message: 'رمزعبور حداقل باید 6 کارکتر باشد' })
  .regex(passwordPattern, 'رمز عبور باید شامل اعداد، نماد و حروف انگلیسی(بزرگ/کوچک) باشد');
const usernameValidation = z.string().min(1, { message: 'نام کاربری را وارد کنید' });

export const LoginSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: 'ساختار ایمیل معتبر نیست' }),
    username: usernameValidation,
    password: passwordValidation,
    userType: z.enum(['InnerUser', 'Company']),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    companyName: z.string().optional(),
  })
  .superRefine(({ firstName, lastName, userType, companyName }, ctx) => {
    const isUser = userType === 'InnerUser';
    const isCompany = userType === 'Company';
    const companyDataEmpty = isCompany && !companyName;
    if (isUser) {
      if (!firstName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'نام را وارد کنید',
          path: ['firstName'],
        });
      }
      if (!lastName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'نام خانوادگی را وارد کنید',
          path: ['lastName'],
        });
      }
      return;
    }
    if (companyDataEmpty) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'نام شرکت را وارد کنید',
        path: ['companyName'],
      });
    }
  });
