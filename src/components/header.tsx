'use client';
import Link from 'next/link';
// UI frameworks
import { Fingerprint } from 'lucide-react';
// Common components
import Logo from './logo';
import { Button } from './ui/button';
// Utilities
import { clsx } from 'clsx';
// Hooks
import { usePathname } from 'next/navigation';
// Config
import { navigationLinks } from '@/config/app';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between h-14 items-center">
        {/* Right Part */}
        <div className="ml-4 flex">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navigationLinks.map((navItem) => (
              <Link
                key={navItem.id}
                href={navItem.href}
                className={clsx(
                  'text-md transition-colors hover:text-foreground/80 text-foreground/60',
                  {
                    ['text-primary hover:text-primary']:
                      pathname === navItem.href,
                  }
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <Button size="sm">
            <Fingerprint className="ml-2 w-4 h-4" />
            <span>ورود | ثبت نام </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
