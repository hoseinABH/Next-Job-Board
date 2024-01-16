'use client';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}
export default function FilterSection({ className }: Props) {
  return <div className={cn('rounded-md border p-6', className)}>
    
  </div>;
}
