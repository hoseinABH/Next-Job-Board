'use client';
// Common components
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from '@/components/ui/drawer';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import InternshipsActions from '@/store/internship/internships.actions';

interface Props {
  children: React.ReactNode;
}

export default function FilterSheet({ children }: Props) {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.jobs);

  function onOpenChange(open: boolean) {
    dispatch(InternshipsActions.setModalOpen(open, 'filter'));
  }
  return (
    <Drawer open={modals.filter} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="max-h-[96%] overflow-auto">{children}</div>
        <DrawerFooter>
          <Button>اعمال فیلتر</Button>
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
