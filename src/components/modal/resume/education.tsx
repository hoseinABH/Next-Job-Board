'use client';
import CheckboxField from '@/components/checkbox-field';
// Common components
import InputField from '@/components/input-field';
import SelectField from '@/components/select-field';
import SubmitButton from '@/components/submit-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Actions
import { createEducation } from '@/actions/user';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';
// Constants
import { educationGradeOptions } from '@/constants/user';

export function EducationModal() {
  const [formState, action] = useFormState(createEducation, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState, closeDialog);
  function onOpenChange(open: boolean) {
    openModal(open, 'education');
  }
  function closeDialog() {
    openModal(false, 'education');
  }
  return (
    <Dialog open={modals.education} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>سوابق تحصیلی</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              maxLength={32}
              name="fieldOfEducation"
              label="رشته تحصیلی و گرایش"
              formState={formState}
            />
            <InputField
              maxLength={32}
              name="educationalInstitution"
              label="نام دانشگاه"
              formState={formState}
            />
            <SelectField
              name="grade"
              label="مقطع تحصیلی"
              options={educationGradeOptions}
              formState={formState}
            />
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
              name="stillEducating"
              value="stillEducating"
              label="در این مقطع مشغول به تحصیل هستم"
              containerClassName="sm:col-span-2"
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
