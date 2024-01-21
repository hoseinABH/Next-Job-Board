// UI Frameworks
import { ChevronDown } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  toggle: () => void;
  collapsed: boolean;
  className?: string;
}
export default function ShowMoreButton({
  toggle,
  collapsed,
  className,
}: Props) {
  return (
    <button
      onClick={toggle}
      className={cn(
        'cursor-pointer text-muted-foreground absolute bottom-2 left-5 flex items-center select-none',
        className
      )}
    >
      نمایش
      <div className="relative mr-1">
        <p
          className={cn('transition-all absolute duration-500', {
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
        className={cn('transition-all w-5 h-5 mr-2 duration-500', {
          ['rotate-180 duration-500']: collapsed,
        })}
      />
    </button>
  );
}
