// Common components
import ControlledInput from '@/components/controlled-input';
import ControlledCheckbox from '@/components/controlled-checkbox';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';

const workExperienceFormSchema = z.object({
  position: z.string().min(1, { message: 'عنوان شغلی را وارد کنید' }),
  companyName: z.string().min(1, { message: 'نام شرکت را وارد کنید' }),
  startDate: z.string().min(1, { message: 'تاریخ شروع را وارد کنید' }),
  endDate: z.string().min(1, { message: 'تاریخ پایان را وارد کنید' }),
  description: z.string().min(1, { message: 'توضیحات را وارد کنید' }),
  isCurrent: z.boolean(),
});

type FormData = typeof workExperienceFormSchema;

export function WorkExperienceModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.resume);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(workExperienceFormSchema),
    defaultValues: {
      position: '',
      companyName: '',
      startDate: '',
      endDate: '',
      description: '',
      isCurrent: false,
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    dispatch(ResumeActions.createExperience(values));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'workExperience'));
    form.reset();
  }
  return (
    <Dialog open={modals.workExperience} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen pb-4 pt-12 sm:pt-4 overflow-auto">
        <DialogHeader>
          <DialogTitle>سوابق شغلی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="workExperience"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              control={form.control}
              name="position"
              label="عنوان شغلی"
            />
            <ControlledInput
              control={form.control}
              name="companyName"
              label="نام شرکت"
            />
            <ControlledInput
              control={form.control}
              name="startDate"
              label="تاریخ شروع"
              inputProps={{ dir: 'ltr', type: 'date' }}
            />
            <ControlledInput
              control={form.control}
              name="endDate"
              label="تاریخ پایان"
              inputProps={{ dir: 'ltr', type: 'date' }}
            />
            <ControlledCheckbox
              control={form.control}
              name="isCurrent"
              label="در این شرکت مشغول به کار هستم"
            />
            <ControlledInput
              className="sm:col-span-2"
              control={form.control}
              name="description"
              label="توضیحات"
              isTextArea
              inputProps={{ rows: 5 }}
            />
          </form>
          <DialogFooter>
            <Button
              form="workExperience"
              type="submit"
              loading={loading.createExperience}
            >
              ثبت اطلاعات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
