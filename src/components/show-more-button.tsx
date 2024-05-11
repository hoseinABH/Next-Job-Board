// UI Frameworks
import { ChevronDown } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  toggle: () => void;
  collapsed: boolean;
  className?: string;
}
export default function ShowMoreButton({ toggle, collapsed, className }: Props) {
  return (
    <button
      onClick={toggle}
      className={cn(
        'absolute bottom-2 left-5 flex cursor-pointer select-none items-center text-muted-foreground',
        className,
      )}
    >
      نمایش
      <div className="relative mr-1">
        <p
          className={cn('absolute transition-all duration-500', {
            ['translate-y-10']: !collapsed,
          })}
        >
          کمتر
        </p>
        <p
          className={cn('transition-all   duration-500', {
            ['translate-y-10']: collapsed,
          })}
        >
          بیشتر
        </p>
      </div>
      <ChevronDown
        className={cn('mr-2 h-5 w-5 transition-all duration-500', {
          ['rotate-180 duration-500']: collapsed,
        })}
      />
    </button>
  );
}
