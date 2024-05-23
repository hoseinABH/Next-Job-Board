import { z } from 'zod';

export const CreatePositionFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان فرصت شغلی را وارد کنید' }),
  grade: z.enum(['0', '1', '2', '3', '4', '5'], {
    errorMap: () => ({ message: 'مقطع تحصیلی را انتخاب کنید' }),
  }),
  submissionDeadline: z.string().min(1, { message: 'تاریخ مهلت درخواست را وارد کنید' }),
  salary: z.string().min(1, { message: 'حقوق پیشنهادی را وارد کنید' }),
  description: z.string().min(1, { message: 'توضیحات موقعیت شغلی را وارد کنید' }),
  immediateRecruitment: z.boolean(),
  userRole: z.enum(['Company', 'InnerUser', 'OuterUser']),
});
