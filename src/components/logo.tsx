// UI frameworks
import { Gem } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}
export default function Logo({ className }: Props) {
  return (
    <div className={cn('ml-6 flex items-center', className)}>
      <Gem className="w-6 h-6 hover:rotate-45 transition-transform text-primary" />
      <span className="hidden font-bold sm:inline-block">[جاب اونجا]</span>
    </div>
  );
}
