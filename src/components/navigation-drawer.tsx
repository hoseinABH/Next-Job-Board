import { Fragment, ReactNode } from 'react';
import Link from 'next/link';
// UI frameworks
import { AlignJustify } from 'lucide-react';
// Common components
import Logo from './logo';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetPortal,
  SheetTitle,
} from './ui/sheet';
import { Separator } from './ui/separator';

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
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </Fragment>
  );
}
