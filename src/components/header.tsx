'use client';
import Link from 'next/link';
// UI frameworks
import { Fingerprint, Gem } from 'lucide-react';
// Common components
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
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Right Part */}
        <div className="ml-4 hidden md:flex">
          <Link href="/" className="ml-6 flex items-center">
            <Gem className="w-6 h-6 hover:rotate-45 transition-transform text-primary" />
            <span className="hidden font-bold sm:inline-block">
              [جاب اونجا]
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigationLinks.map((navItem) => (
              <Link
                key={navItem.id}
                href={navItem.href}
                className={clsx(
                  'text-md transition-colors hover:text-foreground/80 text-foreground/60',
                  {
                    ['text-foreground']: pathname === navItem.href,
                  }
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Left Part */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button>
            <Fingerprint className="ml-2" />
            <span>ورود | ثبت نام </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
