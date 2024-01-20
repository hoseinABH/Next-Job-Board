import { ReactNode, useState } from 'react';
// UI Frameworks
import { ChevronDown, LucideIcon, Pencil, PlusCircle } from 'lucide-react';
// Common components
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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
  const ActionIcon = actionType === 'edit' ? Pencil : PlusCircle;
  function toggleAccordion() {
    setCollapsed((prev) => !prev);
  }
  return (
    <section
      id={id}
      className={cn(
        'p-6 rounded-md shadow-md relative bg-card dark:bg-secondary/30 max-h-80 overflow-hidden transition-[max-height] duration-500',
        { ['max-h-full transition-[max-height] duration-500']: collapsed },
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <ActionIcon className="text-primary w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{actionType === 'create' ? 'افزودن' : 'ویرایش'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Separator className="my-3" />
      {children}
      {hasShowMore ? (
        <ShowMoreButton toggle={toggleAccordion} collapsed={collapsed} />
      ) : null}
    </section>
  );
}
