'use client';
import { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
// UI frameworks
import { AlignJustify } from 'lucide-react';
// Common components
import AppVersion from './app-version';
import NavigationItems from './navigation-items';
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

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const Logo = dynamic(() => import('@/components/logo'), { ssr: false });

export default function NavigationDrawer() {
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
        <AlignJustify className="w-4 h-4" />
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
              className="flex flex-col gap-4 mt-4"
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
