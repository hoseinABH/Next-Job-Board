'use client';
// Common components
import { Fragment, useState } from 'react';
import { AlignJustify } from 'lucide-react';
import AppVersion from './app-version';
import Logo from './logo';
import NavigationItems from './navigation-items';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetPortal, SheetTitle } from './ui/sheet';
// Types
import { UserRole } from '@/types/user';
interface Props {
  userRole?: UserRole;
}
export default function NavigationDrawer({ userRole }: Props) {
  const [open, setOpen] = useState(false);

  function openChange(open: boolean) {
    setOpen(open);
  }
  function openDrawer() {
    setOpen(true);
  }
  function closeDrawer() {
    setOpen(false);
  }
  return (
    <Fragment>
      <Button size="icon" variant="ghost" onClick={openDrawer}>
        <AlignJustify className="h-4 w-4" />
      </Button>
      <Sheet onOpenChange={openChange} open={open}>
        <SheetPortal>
          <SheetContent visibleCloseButton={false}>
            <SheetHeader>
              <SheetTitle>
                <Logo onClick={closeDrawer} />
              </SheetTitle>
            </SheetHeader>
            <Separator className="mt-4" />
            <NavigationItems
              userRole={userRole}
              className="mt-4 flex flex-col gap-4"
              onSelect={closeDrawer}
            />
            <SheetFooter className="absolute bottom-4">
              <AppVersion />
            </SheetFooter>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </Fragment>
  );
}
