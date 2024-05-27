import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';
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
      <Image
        src="/test.png"
        className="rounded-sm drop-shadow-md"
        width={50}
        height={50}
        alt={test.title}
      />
      <h4>{test.title}</h4>
      <Link href={href}>
        <Button size="lg" variant="secondary" className="rounded-full px-8">
          پاسخ
        </Button>
      </Link>
    </div>
  );
}
