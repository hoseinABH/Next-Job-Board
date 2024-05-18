'use client';
import { ReactNode } from 'react';
// UI Frameworks
import { LucideIcon, Pencil, Plus } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
// Utilities
import Maybe from '@/components/maybe';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  id?: string;
  actionType?: 'create' | 'edit';
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  hasShowMore?: boolean;
  actionHandler?: () => void;
  loading?: boolean;
}
export default function SectionWrapper({
  children,
  className,
  id,
  icon,
  title,
  actionType = 'create',
  loading = false,
  actionHandler,
}: Props) {
  const SectionIcon = icon;
  const ActionIcon = actionType === 'edit' ? Pencil : Plus;
  return (
    <Card
      id={id}
      className={cn(
        'relative max-h-full overflow-hidden p-6 transition-[max-height]  duration-500 xl:max-h-full',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Maybe condition={loading}>
            <Skeleton className="h-6 w-6" />
          </Maybe>
          {SectionIcon ? <SectionIcon className="h-6 w-6" /> : null}
          <p className="text-lg">{title}</p>
        </div>
        <Maybe condition={loading}>
          <Skeleton className="h-6 w-6" />
        </Maybe>
        <Maybe condition={Boolean(actionHandler)}>
          <IconButton title={actionType === 'create' ? 'افزودن' : 'ویرایش'} onClick={actionHandler}>
            <ActionIcon className="h-4 w-4" />
          </IconButton>
        </Maybe>
      </div>
      <Separator className="my-3" />
      {children}
    </Card>
  );
}
