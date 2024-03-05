'use client';
// Local components
import PositionsTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Hooks
import { useAppSelector } from '@/hooks/store';
// Data
import { positions } from './data';
import { ConfirmDeleteDialog } from '@/components/modal';

export default function DashboardPositionsPage() {
  const { modals } = useAppSelector((state) => state.common);
  const { dialogData } = useAppSelector((state) => state.panel);

  function submitDeleteAction() {
    console.log('delete');
  }
  return (
    <>
      <PositionsTable positions={positions} />
      <CreatePositionModal />
      <ConfirmDeleteDialog
        open={modals.confirmDelete}
        title={dialogData?.title}
        onSubmit={submitDeleteAction}
      >
        {dialogData?.message ?? ''}
      </ConfirmDeleteDialog>
    </>
  );
}
