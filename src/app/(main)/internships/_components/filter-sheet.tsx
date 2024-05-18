'use client';
// Common components
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from '@/components/ui/drawer';

interface Props {
  children: React.ReactNode;
}

export default function FilterSheet({ children }: Props) {
  function onOpenChange(open: boolean) {
    // dispatch(InternshipActions.setModalOpen(open, 'filter'));
  }
  return (
    <Drawer
      //  open={modals.filter}
      onOpenChange={onOpenChange}
    >
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
