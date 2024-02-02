import Link from 'next/link';
// Common components
import { Badge } from './ui/badge';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job } from '@/types/jobs';

interface Props {
  job: Job;
  className?: string;
  href?: string;
}

export default function FeaturedJobCard({ className, job, href = '/' }: Props) {
  return (
    <Link href={href}>
      <Card className={cn('relative', className)}>
        {job.isUrgent ? (
          <Badge variant="destructive" className="absolute top-2 right-2">
            فوری
          </Badge>
        ) : null}
        <CardContent className="flex flex-col p-6 justify-center items-center w-full">
          <span className="text-sm mt-4">{job.company.name}</span>
          <p className="font-semibold  text-md">{job.title}</p>
          <p className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
