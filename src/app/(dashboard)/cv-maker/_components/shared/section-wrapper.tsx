import { ReactNode, useState } from 'react';
// UI Frameworks
import { LucideIcon, Pencil, Plus } from 'lucide-react';
// Common components
import { Separator } from '@/components/ui/separator';
import IconButton from '@/components/icon-button';
import ShowMoreButton from '@/components/show-more-button';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  id?: string;
  actionType?: 'create' | 'edit';
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  hasShowMore?: boolean;
}
export default function SectionWrapper({
  children,
  className,
  id,
  icon,
  title,
  actionType = 'create',
  hasShowMore = false,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const SectionIcon = icon;
  const ActionIcon = actionType === 'edit' ? Pencil : Plus;
  function toggleAccordion() {
    setCollapsed((prev) => !prev);
  }
  return (
    <section
      id={id}
      className={cn(
        'p-6 rounded-md max-h-full xl:max-h-72 shadow-md relative bg-card dark:bg-secondary/30 overflow-hidden transition-[max-height] duration-500',
        { ['max-h-full xl:max-h-full transition-[max-height] duration-500']: collapsed },
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          {SectionIcon ? (
            <SectionIcon className="w-6 h-6 text-primary" />
          ) : null}
          <p className="text-lg">{title}</p>
        </div>
        <IconButton title={actionType === 'create' ? 'افزودن' : 'ویرایش'}>
          <ActionIcon className="text-primary w-4 h-4" />
        </IconButton>
      </div>
      <Separator className="my-3" />
      {children}
      {hasShowMore ? (
        <ShowMoreButton
          className="lg:flex hidden"
          toggle={toggleAccordion}
          collapsed={collapsed}
        />
      ) : null}
    </section>
  );
}
