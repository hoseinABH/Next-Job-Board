// UI frameworks
import { Gem } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}
export default function Logo({ className }: Props) {
  return (
    <div
      className={cn(
        'group ml-6 flex items-center w-fit text-nowrap',
        className
      )}
    >
      <Gem className="w-6 h-6 group-hover:rotate-45 transition-transform text-primary" />
      <span className="font-bold inline-block">[جاب اونجا]</span>
    </div>
  );
}
