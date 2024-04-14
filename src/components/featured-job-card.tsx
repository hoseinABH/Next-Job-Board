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
        <CardContent className="flex flex-col p-6 justify-center items-center w-full">
          <span className="text-sm mt-4">{job.title}</span>
          <p className="font-semibold  text-md">{job.company.name}</p>
          <p className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 ml-1" /> {job.company.city}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
