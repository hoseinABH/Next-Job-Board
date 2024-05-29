import { cn } from '@/lib/utils';
import { TestTube2Icon } from 'lucide-react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
// Types
import type { Test } from '@/types/internship';

interface Props {
  test: Test;
  href: string;
  className?: string;
}

export default function TestCard({ test, className, href }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-y-4 rounded-md border p-6 transition-all hover:scale-105',
        className,
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/30">
        <TestTube2Icon />
      </div>
      <h4>{test.title}</h4>
      {test.isPassed ? (
        <div
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-full px-8',
          })}
        >
          انجام شده
        </div>
      ) : (
        <Link href={href}>
          <Button size="lg" variant="secondary" className="rounded-full px-8">
            شروع تست
          </Button>
        </Link>
      )}
    </div>
  );
}
