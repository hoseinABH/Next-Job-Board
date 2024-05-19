'use client';
// Common components
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

export function LanguageModal() {
  const [formState, action] = useFormState(updateAboutMe, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState);
  function onOpenChange(open: boolean) {
    openModal(open, 'language');
  }
  return (
    <Dialog open={modals.language} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto">
        <DialogHeader>
          <DialogTitle>زبان ها</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SelectField
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
              formState={formState}
            />
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
