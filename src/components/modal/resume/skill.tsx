'use client';
// Common components
import ControlledInput from '@/components/controlled-input';
import ControlledSelect from '@/components/controlled-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
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
  name: z.string().min(1, { message: 'مهارت را وارد کنید' }),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert'], {
    required_error: 'سطح را انتخاب کنید',
  }),
});

type FormData = typeof languageFormSchema;

export function SkillModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.user);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(languageFormSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<FormData>) {
    dispatch(ResumeActions.createSkill(values));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'skill'));
    form.reset();
  }
  return (
    <Dialog open={modals.skill} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto">
        <DialogHeader>
          <DialogTitle>مهارت ها</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="skill"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput control={form.control} name="name" label="مهارت" />
            <ControlledSelect
              control={form.control}
              name="level"
              label="سطح"
              options={levelOptions}
            />
          </form>
          <DialogFooter>
            <Button form="skill" type="submit" loading={loading.createSkill}>
              ذخیره تغییرات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
