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
// Constants
import { educationGradeOptions } from '@/constants/user';

export default function CreatePositionModal() {
  function onOpenChange(open: boolean) {
    // dispatch(PanelActions.setModalOpen(open, 'createPosition'));
  }
  return (
    <Dialog
      // open={modals.createPosition}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>موقعیت شغلی جدید</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form id="createPosition" className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField name="title" label="عنوان موقعیت شغلی" />
            <SelectField
              name="requiredDegree"
              label="مقطع تحصیلی مورد نیاز"
              options={educationGradeOptions}
            />
            <InputField
              name="applicationDeadline"
              label="مهلت ارسال درخواست"
              dir="ltr"
              type="data"
            />
            <InputField
              name="salary"
              label="حقوق پیشنهادی"
              dir="ltr"
              inputMode="numeric"
              placeholder="تومان"
            />
            <TextAreaField
              name="description"
              label="توضیحات فرصت شغلی"
              rows={6}
              containerClassName="sm:col-span-2"
            />
            <CheckboxField
              name="isUrgent"
              label="استخدام فوری"
              containerClassName="sm:col-span-2"
            />
          </div>
          <DialogFooter>
            <SubmitButton>ثبت موقعیت شغلی</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
