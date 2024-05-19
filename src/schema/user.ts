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

export const WorkExperienceFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  companyName: z.string().min(1, { message: 'نام شرکت را وارد کنید' }),
  startDate: z.string().min(1, { message: 'تاریخ شروع را وارد کنید' }),
  endDate: z.string().nullable(),
  description: z.string().min(1, { message: 'توضیحات را وارد کنید' }),
  stillWorking: z.boolean(),
});

export const EducationFormSchema = z.object({
  educationalInstitution: z.string().min(1, { message: 'نام دانشگاه را وارد کنید' }),
  grade: z.enum(['0', '1', '2', '3', '4', '5'], {
    required_error: 'مقطع را انتخاب کنید',
  }),
  fieldOfEducation: z.string().min(1, { message: 'رشته تحصیلی را وارد کنید' }),
  startDate: z.string().min(1, { message: 'تاریخ شروع را وارد کنید' }),
  endDate: z.string().nullable(),
  stillEducating: z.boolean(),
});

export const LanguageFormSchema = z.object({
  name: z.string().min(1, { message: 'زبان را وارد کنید' }),
  level: z.enum(['0', '1', '2', '3', '4', '5'], {
    required_error: 'سطح را انتخاب کنید',
  }),
});
export const SkillFormSchema = z.object({
  name: z.string().min(1, { message: 'مهارت را وارد کنید' }),
  level: z.enum(['0', '1', '2', '3', '4', '5'], {
    required_error: 'سطح را انتخاب کنید',
  }),
});
