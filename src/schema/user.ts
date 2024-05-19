import { z } from 'zod';

export const AboutMeFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  aboutMe: z
    .string()
    .min(1, { message: 'درباره من را وارد کنید' })
    .max(400, { message: 'حداکثر کارکتر درباره من 400 می باشد' }),
});

export const PersonalInfoFormSchema = z.object({
  firstName: z.string().min(1, { message: 'نام را وارد کنید' }),
  lastName: z.string().min(1, { message: 'نام خانوادگی را وارد کنید' }),
  maritalStatus: z.enum(['0', '1'], {
    required_error: 'وضعیت تاهل را انتخاب کنید',
  }),
  gender: z.enum(['0', '1'], {
    required_error: 'جنسیت را انتخاب کنید',
  }),
  militaryService: z.enum(['0', '1', '2', '3', '4', '5'], {
    required_error: 'وضعیت خدمت را انتخاب کنید',
  }),
  city: z.string().min(1, { message: 'محل سکونت را وارد کنید' }),
});
