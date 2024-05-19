'use client';
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
import { updateAboutMe } from '@/actions/user';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';

export function SkillModal() {
  const [formState, action] = useFormState(updateAboutMe, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState);
  function onOpenChange(open: boolean) {
    openModal(open, 'skill');
  }
  return (
    <Dialog open={modals.skill} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto">
        <DialogHeader>
          <DialogTitle>مهارت ها</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField name="name" label="مهارت" formState={formState} />
            <SelectField name="level" label="سطح" options={[]} formState={formState} />
          </div>
          <DialogFooter>
            <SubmitButton>ذخیره تغییرات</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
