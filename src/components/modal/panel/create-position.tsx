'use client';
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
import PanelActions from '@/store/Panel/panel.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';
// Constants
import { educationDegreeOptions } from '@/constants';

const educationFormSchema = z.object({
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

type FormData = typeof educationFormSchema;

export default function CreatePositionModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.panel);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      title: '',
      applicationDeadline: '',
      salary: '',
      description: '',
      isUrgent: false,
    },
  });
  function onSubmit(values: z.infer<FormData>) {
    console.log(values);
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(PanelActions.setModalOpen(open, 'createPosition'));
    form.reset();
  }
  return (
    <Dialog open={modals.createPosition} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>موقعیت شغلی جدید</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="createPosition"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput control={form.control} name="title" label="عنوان موقعیت شغلی" />
            <ControlledSelect
              control={form.control}
              name="requiredDegree"
              label="مقطع تحصیلی مورد نیاز"
              options={educationDegreeOptions}
            />
            <ControlledInput
              control={form.control}
              name="applicationDeadline"
              label="مهلت ارسال درخواست"
              inputProps={{ dir: 'ltr', type: 'date' }}
            />
            <ControlledInput
              control={form.control}
              name="salary"
              label="حقوق پیشنهادی"
              inputProps={{
                dir: 'ltr',
                inputMode: 'numeric',
                placeholder: 'تومان',
              }}
            />
            <ControlledInput
              control={form.control}
              name="description"
              label="توضیحات فرصت شغلی"
              isTextArea
              inputProps={{ rows: 6 }}
              description="حداکثر 400 کاراکتر"
              className="sm:col-span-2"
            />
            <ControlledCheckbox
              control={form.control}
              name="isUrgent"
              label="استخدام فوری"
              className="sm:col-span-2"
            />
          </form>
          <DialogFooter>
            <Button form="createPosition" type="submit">
              ثبت موقعیت شغلی
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
