'use client';
import { Button } from '@/components/ui/button';
// Hooks
import useCompanyStore from '@/store/company';

export default function PositionsHeader() {
  const { openModal } = useCompanyStore();
  function openCreatePositionModal() {
    openModal(true, 'createPosition');
  }
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-0">
      <div>
        <h1 className="text-2xl font-bold">موقعیت های شغلی</h1>
        <p className="text-md text-muted-foreground">لیست موقعیت های شغلی </p>
      </div>
      <Button onClick={openCreatePositionModal}>موقعیت شغلی جدید</Button>
    </div>
  );
}
