'use client';
import FieldError from '@/components/field-error';
// Common components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import { useFormState } from 'react-dom';
// Actions
import { updateAboutMe } from '@/actions/user';
import SubmitButton from '@/components/submit-button';

export function AboutMeModal() {
  const [formState, action] = useFormState(updateAboutMe, EMPTY_FORM_STATE);
  useToastMessage(formState);
  function onOpenChange(open: boolean) {
    // dispatch(ResumeActions.setModalOpen(open, 'aboutMe'));
  }
  return (
    <Dialog
      // open={modals.aboutMe}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>درباره من</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form id="aboutMe" action={action} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">عنوان</Label>
            <Input name="title" />
            <FieldError formState={formState} name="title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aboutMe">درباره من</Label>
            <Textarea name="aboutMe" rows={6} />

            <FieldError formState={formState} name="aboutMe" />
          </div>
        </form>
        <DialogFooter>
          <SubmitButton form="aboutMe">ثبت اطلاعات</SubmitButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
