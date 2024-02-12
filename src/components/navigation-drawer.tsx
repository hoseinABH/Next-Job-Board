import { Fragment, ReactNode } from 'react';
// UI frameworks
import { AlignJustify } from 'lucide-react';
// Common components
import Logo from './logo';
import AppVersion from './app-version';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTitle,
} from './ui/sheet';

interface Props {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function NavigationDrawer({ children, open, setOpen }: Props) {
  function triggerDrawer() {
    setOpen(true);
  }
  function openChange(open: boolean) {
    setOpen(open);
  }
  return (
    <Fragment>
      <Button size="icon" variant="ghost" onClick={triggerDrawer}>
        <AlignJustify className="w-4 h-4" />
      </Button>
      <Sheet onOpenChange={openChange} open={open}>
        <SheetPortal>
          <SheetContent visibleCloseButton={false}>
            <SheetHeader>
              <SheetTitle>
                <Logo onClick={() => setOpen(false)} />
              </SheetTitle>
            </SheetHeader>
            <Separator className="mt-4" />
            <nav className="flex flex-col gap-4 mt-4">{children}</nav>
            <SheetFooter className="absolute bottom-4">
              <AppVersion />
            </SheetFooter>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </Fragment>
  );
}
