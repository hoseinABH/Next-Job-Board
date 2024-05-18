'use client';
// Common components
import ControlledInput from '@/components/controlled-input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
// Utilities
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Hooks
import { useForm } from 'react-hook-form';

const aboutMeFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  aboutMe: z.string().max(400, { message: 'حداکثر کارکتر درباره من 400 می باشد' }),
});

type FormData = typeof aboutMeFormSchema;

export function AboutMeModal() {
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(aboutMeFormSchema),
    defaultValues: {
      title: '',
      aboutMe: '',
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    // dispatch(
    //   ResumeActions.updatePersonalInfo({
    //     ...state!,
    //     aboutMe: values.aboutMe,
    //     jobTitle: values.title,
    //   }),
    // );
    // form.reset();
  }
  function onOpenChange(open: boolean) {
    // dispatch(ResumeActions.setModalOpen(open, 'aboutMe'));
    form.reset();
  }

  // useEffect(() => {
  //   if (modals.aboutMe) {
  //     if (state?.aboutMe) {
  //       form.setValue('aboutMe', state?.aboutMe);
  //     }
  //     if (state?.jobTitle) {
  //       form.setValue('title', state?.jobTitle);
  //     }
  //   }
  // }, [form, modals.aboutMe, state?.aboutMe, state?.jobTitle]);

  return (
    <Dialog
      // open={modals.aboutMe}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>درباره من</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="aboutMe" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ControlledInput control={form.control} name="title" label="عنوان" />
            <ControlledInput
              control={form.control}
              name="aboutMe"
              label="درباره من"
              isTextArea
              inputProps={{ rows: 6 }}
              description="حداکثر 400 کاراکتر"
            />
          </form>
          <DialogFooter>
            <Button form="aboutMe" type="submit" loading={false}>
              ثبت اطلاعات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
