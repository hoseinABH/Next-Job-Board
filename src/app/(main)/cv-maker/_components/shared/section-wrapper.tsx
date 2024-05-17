'use client';
import { ReactNode, useState } from 'react';
// UI Frameworks
import { LucideIcon, Pencil, Plus } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import ShowMoreButton from '@/components/show-more-button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

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
  hasShowMore = false,
  loading = false,
  actionHandler,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const SectionIcon = icon;
  const ActionIcon = actionType === 'edit' ? Pencil : Plus;
  function toggleAccordion() {
    setCollapsed((prev) => !prev);
  }
  return (
    <Card
      id={id}
      className={cn(
        'relative max-h-full overflow-hidden p-6 transition-[max-height] duration-500 xl:max-h-72',
        {
          ['max-h-full transition-[max-height] duration-500 xl:max-h-full']: collapsed,
        },
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          {loading ? <Skeleton className="h-6 w-6" /> : null}
          {SectionIcon ? <SectionIcon className="h-6 w-6" /> : null}
          <p className="text-lg">{title}</p>
        </div>

        {loading ? <Skeleton className="h-6 w-6" /> : null}
        {actionHandler ? (
          <IconButton title={actionType === 'create' ? 'افزودن' : 'ویرایش'} onClick={actionHandler}>
            <ActionIcon className="h-4 w-4" />
          </IconButton>
        ) : null}
      </div>
      <Separator className="my-3" />
      {children}
      {hasShowMore ? (
        <ShowMoreButton className="hidden lg:flex" toggle={toggleAccordion} collapsed={collapsed} />
      ) : null}
    </Card>
  );
}
