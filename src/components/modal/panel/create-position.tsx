'use client';
import CheckboxField from '@/components/checkbox-field';
// Common components
import InputField from '@/components/input-field';
import SelectField from '@/components/select-field';
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
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useCompanyStore from '@/store/company';
import { useFormState } from 'react-dom';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Actions
import { createPosition } from '@/actions/positions';
// Constants
import { educationGradeOptions } from '@/constants/user';

export default function CreatePositionModal() {
  const [formState, action] = useFormState(createPosition, EMPTY_FORM_STATE);
  const { modals, openModal } = useCompanyStore();
  useToastMessage(formState, closeDialog);

  function onOpenChange(open: boolean) {
    openModal(open, 'createPosition');
  }
  function closeDialog() {
    openModal(false, 'createPosition');
  }
  return (
    <Dialog open={modals.createPosition} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>موقعیت شغلی جدید</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField name="title" label="عنوان موقعیت شغلی" />
            <SelectField
              name="grade"
              label="مقطع تحصیلی مورد نیاز"
              options={educationGradeOptions}
              formState={formState}
            />
            <InputField
              name="submissionDeadline"
              label="مهلت ارسال درخواست"
              dir="ltr"
              type="date"
              formState={formState}
            />
            <InputField
              name="salary"
              label="حقوق پیشنهادی"
              dir="ltr"
              inputMode="numeric"
              placeholder="تومان"
              formState={formState}
            />
            <TextAreaField
              name="description"
              label="توضیحات فرصت شغلی"
              rows={6}
              containerClassName="sm:col-span-2"
              formState={formState}
            />
            <CheckboxField
              name="immediateRecruitment"
              value="immediateRecruitment"
              label="استخدام فوری"
              containerClassName="sm:col-span-2"
              formState={formState}
            />
            <input hidden className="hidden" name="userRole" value="OuterUser" />
          </div>
          <DialogFooter>
            <SubmitButton>ثبت موقعیت شغلی</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
