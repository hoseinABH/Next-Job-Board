'use client';
// Common components
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
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';
// Actions
import { updateAboutMe } from '@/actions/user';

interface Props {
  defaultValues: {
    title?: string;
    aboutMe?: string;
  };
}
export function AboutMeModal({ defaultValues }: Props) {
  const [formState, action] = useFormState(updateAboutMe, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState, closeDialog);
  function onOpenChange(open: boolean) {
    openModal(open, 'aboutMe');
  }
  function closeDialog() {
    openModal(false, 'aboutMe');
  }
  return (
    <Dialog open={modals.aboutMe} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>درباره من</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="space-y-4">
            <InputField
              name="title"
              label="عنوان"
              defaultValue={defaultValues.title}
              formState={formState}
              maxLength={48}
            />
            <TextAreaField
              name="aboutMe"
              label="درباره من"
              defaultValue={defaultValues.aboutMe}
              rows={6}
              formState={formState}
              maxLength={400}
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
