// Common components
import IconButton from './icon-button';
import { Badge } from './ui/badge';
import { X as RemoveIcon } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { ReactNode } from 'react';

interface Props {
  action?: () => void;
  actionLabel?: string;
  className?: string;
  children: ReactNode;
  level: string;
}

export default function SkillBox({ actionLabel, children, level, className, action }: Props) {
  return (
    <div
      className={cn('flex items-center justify-between gap-x-2 rounded-lg border p-4', className)}
    >
      <div className="flex items-center gap-x-2">
        {action ? (
          <IconButton title={actionLabel} onClick={action}>
            <RemoveIcon className="h-4 w-4" />
          </IconButton>
        ) : null}
        <p className="text-muted-foreground">{children}</p>
      </div>
      <Badge>{level}</Badge>
    </div>
  );
}
