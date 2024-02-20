// Common components
import ControlledInput from '@/components/controlled-input';
import ControlledSelect from '@/components/controlled-select';
import ControlledCheckbox from '@/components/controlled-checkbox';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Utilities
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';

const educationFormSchema = z.object({
  institution: z.string().min(1, { message: 'نام دانشگاه را وارد کنید' }),
  degree: z.enum(['bachelor', 'master', 'doctoral'], {
    required_error: 'مقطع را انتخاب کنید',
  }),
  startDate: z.string().min(1, { message: 'تاریخ شروع را وارد کنید' }),
  endDate: z.string().min(1, { message: 'تاریخ پایان را وارد کنید' }),
});

type FormData = typeof educationFormSchema;

export function EducationModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.resume);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      institution: '',
      startDate: '',
      endDate: '',
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    dispatch(ResumeActions.createEducation(values));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'education'));
    form.reset();
  }
  return (
    <Dialog open={modals.education} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen pt-12 pb-4 sm:pt-4 overflow-auto">
        <DialogHeader>
          <DialogTitle>سوابق تحصیلی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="education"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              control={form.control}
              name="institution"
              label="رشته تحصیلی و گرایش"
            />
            <ControlledInput
              control={form.control}
              name="institution"
              label="نام دانشگاه"
            />
            <ControlledSelect
              control={form.control}
              name="degree"
              label="مقطع تحصیلی"
              options={[
                { title: 'کارشناسی', value: 'bachelor' },
                { title: 'کارشناسی ارشد', value: 'master' },
                { title: 'دکترا', value: 'doctoral' },
              ]}
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
              label="در این مقطع مشغول به تحصیل هستم"
              name={'institution'}
            />
          </form>
          <DialogFooter>
            <Button
              form="education"
              type="submit"
              loading={loading.createEducation}
            >
              ثبت اطلاعات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
