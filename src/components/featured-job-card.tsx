import Image from 'next/image';
// Common components
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job } from '@/types/job';
import { Badge } from './ui/badge';

interface Props {
  job: Job;
  className?: string;
  onClick?: () => void;
}

export default function FeaturedJobCard({ className, job }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col relative w-full items-center justify-between border rounded-md px-8 py-10 bg-background dark:bg-secondary transition-all hover:drop-shadow-md',
        className
      )}
    >
      {job.isUrgent ? (
        <Badge variant="destructive" className="absolute top-2 right-2">
          فوری
        </Badge>
      ) : null}
      <Image
        src={job.company.image!}
        width={85}
        height={85}
        alt={job.company.name!}
      />
      <span className="text-sm text-green-500 mt-4">{job.company.name}</span>
      <Button variant="link" className="text-slate-900 dark:text-white hover:text-primary">
        {job.title}
      </Button>
      <p className="flex items-center  text-muted-foreground">
        <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
      </p>
    </div>
  );
}
