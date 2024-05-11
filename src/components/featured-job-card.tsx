import Link from 'next/link';
// Common components
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job } from '@/types/jobs';

interface Props {
  job: Job;
  className?: string;
  href: string;
}

export default function FeaturedJobCard({ className, job, href }: Props) {
  return (
    <Link href={href}>
      <Card className={cn('relative', className)}>
        <CardContent className="flex w-full flex-col items-center justify-center p-6">
          <span className="mt-4 text-sm">{job.title}</span>
          <p className="text-md  font-semibold">{job.company.name}</p>
          <p className="flex items-center text-muted-foreground">
            <MapPin className="ml-1 h-4 w-4" /> {job.company.city}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
