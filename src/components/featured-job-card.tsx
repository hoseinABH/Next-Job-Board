import Link from 'next/link';
import Image from 'next/image';
// Common components
import { Badge } from './ui/badge';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job } from '@/types/job';

interface Props {
  job: Job;
  className?: string;
  href?: string;
}

export default function FeaturedJobCard({ className, job, href = '/' }: Props) {
  return (
    <Link href={href}>
      <Card className={cn('relative dark-card-border', className)}>
        {job.isUrgent ? (
          <Badge variant="destructive" className="absolute top-2 right-2">
            فوری
          </Badge>
        ) : null}
        <CardContent className="flex flex-col p-6 justify-center items-center w-full">
          <Image
            src={job.company.image!}
            width={85}
            height={85}
            alt={job.company.name!}
          />
          <span className="text-sm mt-4">{job.company.name}</span>
          <p className="font-semibold primary-text-color text-md">
            {job.title}
          </p>
          <p className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
