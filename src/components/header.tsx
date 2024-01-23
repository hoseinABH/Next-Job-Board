'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
// UI frameworks
import { Fingerprint } from 'lucide-react';
// Common components
import Logo from './logo';
import NavigationDrawer from './navigation-drawer';
import { Button, buttonVariants } from './ui/button';
// Utilities
import { clsx } from 'clsx';
// Hooks
import { usePathname } from 'next/navigation';
// Config
import { navigationLinks } from '@/config/app';
import * as Routes from '@/config/routes';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const renderNavLinks = useMemo(
    () =>
      navigationLinks.map((navItem) => (
        <Link
          onClick={() => setDrawerOpen(false)}
          key={navItem.id}
          href={navItem.href}
          className={clsx('text-md transition-colors', {
            ['golden-text font-medium']: pathname === navItem.href,
          })}
        >
          {navItem.name}
        </Link>
      )),
    [pathname]
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-2 sm:px-8 flex justify-between h-14 items-center">
        {/* Right Part */}
        <div className="flex items-center">
          <div className="inline md:hidden ml-4">
            <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen}>
              {renderNavLinks}
            </NavigationDrawer>
          </div>
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {renderNavLinks}
          </nav>
        </div>
        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <Link href={Routes.LOGIN} className={buttonVariants()}>
            <Fingerprint className="ml-2 w-4 h-4" />
            <span>ورود | ثبت نام</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
