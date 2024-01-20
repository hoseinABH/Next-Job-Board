import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { LucideIcon, Pencil, PlusCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  id?: string;
  actionType?: 'create' | 'edit';
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  handleClickAction?: () => void;
}
export default function SectionWrapper({
  children,
  className,
  id,
  icon,
  title,
  actionType = 'create',
  handleClickAction,
}: Props) {
  const SectionIcon = icon;
  const ActionIcon = actionType === 'edit' ? Pencil : PlusCircle;
  return (
    <section
      id={id}
      className={cn(
        'p-6 rounded-md shadow-md relative bg-card dark:bg-secondary/30',
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
        <Button size="icon" variant="ghost" onClick={handleClickAction}>
          <ActionIcon className="text-primary w-4 h-4" />
        </Button>
      </div>
      <Separator className="my-3" />
      {children}
    </section>
  );
}
