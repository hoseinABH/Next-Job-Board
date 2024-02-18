// Common components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// Utilities
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';

const aboutMeFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  aboutMe: z
    .string()
    .max(400, { message: 'حداکثر کارکتر درباره من 400 می باشد' }),
});

type FormData = typeof aboutMeFormSchema;

export function AboutMeModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.resume);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(aboutMeFormSchema),
    defaultValues: {
      title: '',
      aboutMe: '',
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    dispatch(
      ResumeActions.updatePersonalInfo({
        firstName: '',
        lastName: '',
        photo: {
          id: '',
        },
        maritalStatus: 'single',
        gender: 'female',
        militaryStatus: 'EducationalExemption',
        address: '',
        birthDate: '',
        phone: '',
        aboutMe: values.aboutMe,
      })
    );
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'aboutMe'));
    form.reset();
  }

  return (
    <Dialog open={modals.aboutMe} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>درباره من</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="aboutMe"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عنوان</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutMe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>درباره من</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormDescription>حداکثر 400 کاراکتر</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <DialogFooter>
            <Button
              form="aboutMe"
              type="submit"
              loading={loading.updatePersonal}
            >
              ذخیره تغییرات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
