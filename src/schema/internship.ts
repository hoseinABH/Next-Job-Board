import { z } from 'zod';

export const CreatePositionFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان فرصت شغلی را وارد کنید' }),
  requiredDegree: z.enum(
    ['Bachelor', 'Master', 'Doctoral', 'MiddleSchoolDiploma', 'Associate', 'Professional'],
    {
      required_error: 'مقطع تحصیلی مورد نیاز را انتخاب کنید',
    },
  ),
  applicationDeadline: z.string().min(1, { message: 'تاریخ مهلت درخواست را وارد کنید' }),
  salary: z.string().min(1, { message: 'حقوق پیشنهادی را وارد کنید' }),
  description: z.string().min(1, { message: 'توضیحات موقعیت شغلی را وارد کنید' }),
  isUrgent: z.boolean(),
});
