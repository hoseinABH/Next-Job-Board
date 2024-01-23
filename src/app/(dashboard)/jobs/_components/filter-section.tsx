'use client';
// Common components
import { Card } from '@/components/ui/card';
// Utilities
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}
export default function FilterSection({ className }: Props) {
  return <Card className={cn('', className)}></Card>;
}
