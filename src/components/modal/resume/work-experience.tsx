'use client';
// Common components
import CheckboxField from '@/components/checkbox-field';
import InputField from '@/components/input-field';
import SubmitButton from '@/components/submit-button';
import TextAreaField from '@/components/text-area-field';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Actions
import { createWorkExperience } from '@/actions/user';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';

export function WorkExperienceModal() {
  const [formState, action] = useFormState(createWorkExperience, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState);
  function onOpenChange(open: boolean) {
    openModal(open, 'workExperience');
  }
  return (
    <Dialog open={modals.workExperience} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>سوابق شغلی</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField name="title" label="عنوان شغلی" formState={formState} />
            <InputField name="companyName" label="نام شرکت" formState={formState} />
            <InputField
              name="startDate"
              label="تاریخ شروع"
              dir="ltr"
              type="date"
              formState={formState}
            />
            <InputField
              name="endDate"
              label="تاریخ پایان"
              dir="ltr"
              type="date"
              formState={formState}
            />
            <CheckboxField
              name="stillWorking"
              value="stillEducating"
              label="در این شرکت مشغول به کار هستم"
              formState={formState}
            />
            <TextAreaField
              containerClassName="sm:col-span-2"
              name="description"
              label="توضیحات"
              rows={6}
              formState={formState}
            />
          </div>
          <DialogFooter>
            <SubmitButton>ثبت اطلاعات</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
