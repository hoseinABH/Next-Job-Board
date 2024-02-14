'use client';
import Link from 'next/link';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { usePathname } from 'next/navigation';
// Config
import { navigationLinks } from '@/config/app';

interface Props {
  className?: string;
  onSelect?: () => void;
}
export default function NavigationItems({ className, onSelect }: Props) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navigationLinks.map(({ href, name }) => (
        <Link
          onClick={onSelect}
          key={href}
          href={href}
          className={cn('text-md transition-colors', {
            [' font-medium']: href === pathname,
          })}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
