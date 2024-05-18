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

export function ConfirmDeleteDialog() {
  function onSubmit() {
    // dispatch(UserActions.removeField());
  }
  function onOpenChange(open: boolean) {
    // if (loading.removeEntity) return;
    // dispatch(UserActions.setModalOpen(open, 'confirmDelete'));
  }
  function dismiss() {
    // if (loading.removeEntity) return;
    // dispatch(UserActions.setModalOpen(false, 'confirmDelete'));
  }
  return (
    <AlertDialog
      // open={modals.confirmDelete}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent onDismiss={dismiss}>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-x-2">
            <XOctagon className="h-6 w-6 text-destructive" />
            {/* {dialogData?.title} */}
          </AlertDialogTitle>
          <AlertDialogDescription>{/* {dialogData?.message} */}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="destructive" loading={false} onClick={onSubmit}>
            حذف
          </Button>
          <AlertDialogCancel disabled={false}>انصراف</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
