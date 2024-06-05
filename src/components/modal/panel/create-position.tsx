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
import { createPosition, updatePosition } from '@/actions/internship';
// Constants
import { educationGradeOptions } from '@/constants/user';

export default function CreatePositionModal() {
  const { modals, openModal, metadata } = useCompanyStore();
  const isUpdate = Boolean(metadata);
  const [formState, action] = useFormState(
    isUpdate ? updatePosition : createPosition,
    EMPTY_FORM_STATE,
  );
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
            {metadata?.id ? (
              <input hidden className="hidden" name="id" defaultValue={metadata.id} />
            ) : null}
            <InputField
              name="title"
              label="عنوان موقعیت شغلی"
              maxLength={32}
              formState={formState}
              defaultValue={metadata?.title}
            />
            <SelectField
              name="grade"
              label="مقطع تحصیلی مورد نیاز"
              options={educationGradeOptions}
              formState={formState}
              defaultValue={metadata?.grade ? String(metadata?.grade) : undefined}
            />
            <InputField
              name="submissionDeadline"
              label="مهلت ارسال درخواست"
              dir="ltr"
              type="date"
              formState={formState}
              defaultValue={metadata?.submissionDeadline}
            />
            <InputField
              name="salary"
              label="حقوق پیشنهادی"
              dir="ltr"
              inputMode="numeric"
              placeholder="تومان"
              maxLength={12}
              formState={formState}
              defaultValue={metadata?.salary}
            />
            <TextAreaField
              name="description"
              label="توضیحات فرصت شغلی"
              rows={6}
              containerClassName="sm:col-span-2"
              formState={formState}
              defaultValue={metadata?.description}
              maxLength={400}
            />
            <CheckboxField
              name="immediateRecruitment"
              value="immediateRecruitment"
              label="استخدام فوری"
              containerClassName="sm:col-span-2"
              formState={formState}
              defaultChecked={metadata?.immediateRecruitment}
            />
            <input hidden className="hidden" name="userRole" defaultValue="OuterUser" />
          </div>
          <DialogFooter>
            <SubmitButton>{isUpdate ? 'ثبت تغییرات' : 'ثبت موقعیت شغلی'}</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
