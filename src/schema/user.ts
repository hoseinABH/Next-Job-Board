import { z } from 'zod';

export const AboutMeFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  aboutMe: z.string().max(400, { message: 'حداکثر کارکتر درباره من 400 می باشد' }),
});
