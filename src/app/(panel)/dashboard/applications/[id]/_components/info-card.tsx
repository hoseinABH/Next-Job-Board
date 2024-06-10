'use client';
import { ReactNode } from 'react';
// UI Frameworks
import { LucideIcon } from 'lucide-react';
// Common components
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// Utilities
import Maybe from '@/components/maybe';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  visible?: boolean;
}
export default function InfoCard({ children, className, icon, title, visible = true }: Props) {
  const SectionIcon = icon;
  return (
    <Maybe condition={visible}>
      <Card
        className={cn(
          'relative max-h-full overflow-hidden p-6 transition-[max-height]  duration-500 xl:max-h-full',
          className,
        )}
      >
        <div className="flex items-center gap-x-3">
          {SectionIcon ? <SectionIcon className="h-6 w-6" /> : null}
          <p className="text-lg">{title}</p>
        </div>
        <Separator className="my-3" />
        {children}
      </Card>
    </Maybe>
  );
}
