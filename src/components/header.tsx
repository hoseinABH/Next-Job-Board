'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// Common components
import Logo from './logo';
import NavigationDrawer from './navigation-drawer';
// Utilities
import { clsx } from 'clsx';
// Hooks
import { usePathname } from 'next/navigation';
// Config
import { navigationLinks } from '@/config/app';

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const UserDropDown = dynamic(() => import('./user-drop-down'), { ssr: false });

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
            [' font-medium']: pathname === navItem.href,
          })}
        >
          {navItem.name}
        </Link>
      )),
    [pathname]
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container px-2 sm:px-8 flex justify-between h-14 items-center">
        {/* Right Part */}
        <div className="flex items-center">
          <div className="inline md:hidden ml-4">
            <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen}>
              {renderNavLinks}
            </NavigationDrawer>
          </div>
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm mr-6">
            {renderNavLinks}
          </nav>
        </div>
        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <UserDropDown />
        </div>
      </div>
    </header>
  );
}
