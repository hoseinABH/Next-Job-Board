'use client';
// Common components
import ControlledSelect from '@/components/controlled-select';
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
import ResumeActions from '@/store/User/user.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';
// Constants
import { levelOptions } from '@/constants';

const languageFormSchema = z.object({
  name: z.string().min(1, { message: 'زبان را انتخاب کنید' }),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert'], {
    required_error: 'سطح را انتخاب کنید',
  }),
});

type FormData = typeof languageFormSchema;

export function LanguageModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.user);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(languageFormSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    dispatch(ResumeActions.createLanguage(values));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'language'));
    form.reset();
  }
  return (
    <Dialog open={modals.language} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto">
        <DialogHeader>
          <DialogTitle>زبان ها</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="language"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledSelect
              control={form.control}
              name="name"
              label="زبان"
              options={[
                {
                  title: 'انگلیسی',
                  value: 'انگلیسی',
                },
                { title: 'آلمانی', value: 'آلمانی' },
                { title: 'فرانسوی', value: 'فرانسوی' },
              ]}
            />
            <ControlledSelect
              control={form.control}
              name="level"
              label="سطح"
              options={levelOptions}
            />
          </form>
          <DialogFooter>
            <Button form="language" type="submit" loading={loading.createLanguage}>
              ذخیره تغییرات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
