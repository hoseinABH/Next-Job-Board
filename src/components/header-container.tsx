'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function HeaderContainer({ children, className }: Props) {
  const pathname = usePathname();
  const isRoot = pathname === '/';
  return (
    <header
      className={cn('absolute z-50 w-full bg-transparent text-card-foreground', {
        ['text-primary-foreground']: isRoot,
        className,
      })}
    >
      {children}
    </header>
  );
}
