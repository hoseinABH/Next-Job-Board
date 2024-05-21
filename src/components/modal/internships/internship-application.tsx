'use client';
// Common components
import SubmitButton from '@/components/submit-button';
import TextAreaField from '@/components/text-area-field';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Actions
import { apply } from '@/actions/positions';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';

interface Props {
  positionId: string;
}

export function InternshipApplicationModal({ positionId }: Props) {
  const [formState, action] = useFormState(apply, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState);
  function onOpenChange(open: boolean) {
    openModal(open, 'apply');
  }
  return (
    <Dialog open={modals.apply} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ارسال درخواست موقعیت کارآموزی</DialogTitle>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="space-y-4">
            <input name="positionId" hidden className="hidden" defaultValue={positionId} />
            <TextAreaField name="description" label="توضیحات" placeholder="اختیاری" rows={6} />
          </div>
          <DialogFooter>
            <SubmitButton>ارسال درخواست</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
