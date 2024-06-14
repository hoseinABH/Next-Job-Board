'use client';
import Link from 'next/link';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { usePathname } from 'next/navigation';
// Config
import { userNavigationLinks, companyNavigationLinks } from '@/config/app';
// Types
import type { UserRole } from '@/types/user';

interface Props {
  className?: string;
  onSelect?: () => void;
  userRole?: UserRole;
}
export default function NavigationItems({ className, onSelect, userRole }: Props) {
  const pathname = usePathname();
  const navigationLinks = userRole === 'Company' ? companyNavigationLinks : userNavigationLinks;
  return (
    <nav className={className}>
      {navigationLinks.map(({ href, name }) => (
        <Link
          onClick={onSelect}
          key={href}
          href={href}
          className={cn('text-md transition-colors', {
            ['font-medium']: href === pathname,
          })}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
