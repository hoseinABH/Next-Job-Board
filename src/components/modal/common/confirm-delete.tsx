// UI Frameworks
import { XOctagon } from 'lucide-react';
// Common components
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import CommonActions from '@/store/Common/common.actions';
// Types
import type { AlertDialogProps } from '@radix-ui/react-alert-dialog';

interface Props extends AlertDialogProps {
  title?: string;
  children: string;
  onSubmit: () => void;
}
export function ConfirmDeleteDialog({ title, children, onSubmit }: Props) {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.common);
  function onOpenChange(open: boolean) {
    dispatch(CommonActions.setModalOpen(open, 'confirmDelete'));
  }
  function dismiss() {
    dispatch(CommonActions.setModalOpen(false, 'confirmDelete'));
  }
  return (
    <AlertDialog open={modals.confirmDelete} onOpenChange={onOpenChange}>
      <AlertDialogContent onDismiss={dismiss}>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-x-2">
            <XOctagon className="w-6 h-6 text-destructive" />
            {title || 'حذف'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {children || 'آیا از حذف این مورد مطمئن هستید؟'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="destructive" onClick={onSubmit}>
            حذف
          </Button>
          <AlertDialogCancel>انصراف</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
