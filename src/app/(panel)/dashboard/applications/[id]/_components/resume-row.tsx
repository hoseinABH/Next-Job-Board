import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
  label: string;
}
export default function ResumeRow({ className, children, label }: Props) {
  return (
    <div className={cn('flex gap-x-2', className)}>
      <h4 className="text-muted-foreground">{label}</h4>
      <p className="flex-nowrap">{children}</p>
    </div>
  );
}
