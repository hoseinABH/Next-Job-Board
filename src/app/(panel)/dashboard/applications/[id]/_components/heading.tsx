// Utilities
import { cn } from '@/lib/utils';
// Types
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Heading({ className, children }: Props) {
  return (
    <div className={cn('relative', className)}>
      <div className="bg-slate-30 h-px w-full bg-border"></div>
      <h1 className="absolute -translate-x-5 -translate-y-4 bg-card text-lg font-bold">
        {children}
      </h1>
    </div>
  );
}
