'use client';
// UI Frameworks
import { XOctagon } from 'lucide-react';
// Common components
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
// Utilities
import { FormState } from '@/lib/error';
// Actions
import { removeEntity } from '@/actions/user';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useState, useTransition } from 'react';

export function ConfirmDeleteDialog() {
  const { openModal, metadata, modals } = useUserStore();
  const [pending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormState>();
  function onSubmit() {
    startTransition(() => {
      removeEntity({
        entityType: metadata?.entityType,
        id: metadata?.id,
      }).then((result) => setFormState(result));
    });
  }
  function onOpenChange(open: boolean) {
    if (pending) return;
    openModal(open, 'removeConfirm');
  }
  function closeModal() {
    openModal(false, 'removeConfirm');
  }
  function dismiss() {
    if (pending) return;
    closeModal();
  }
  useToastMessage(formState, closeModal);
  return (
    <AlertDialog open={modals.removeConfirm} onOpenChange={onOpenChange}>
      <AlertDialogContent onDismiss={dismiss}>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-x-2">
            <XOctagon className="h-6 w-6 text-destructive" />
            {metadata?.title}
          </AlertDialogTitle>
          <AlertDialogDescription>{metadata?.message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="destructive" loading={pending} onClick={onSubmit}>
            حذف
          </Button>
          <AlertDialogCancel disabled={pending}>انصراف</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
