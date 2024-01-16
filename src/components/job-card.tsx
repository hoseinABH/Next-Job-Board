import Link from 'next/link';
import Image from 'next/image';
// Common components
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bookmark, MapPin, Building2, Clock7 } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job, JobType } from '@/types/job';

interface Props {
  job: Job;
  className?: string;
  href?: string;
  onBookmark?: () => void;
}

const mapJobType: Record<JobType, string> = {
  'full-time': 'تمام‌وقت',
  'part-time': 'پاره‌وقت',
  temporary: 'موقت',
  freelance: 'فریلنسر',
};

export default function JobCard({ className, job, href = '/' }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row w-full justify-between border rounded-md px-8 py-6 bg-background dark:bg-secondary/30 transition-all hover:drop-shadow-md',
        className
      )}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src={job.company.image!}
          width={85}
          height={85}
          alt={job.company.name!}
          className='rounded-full'
        />
        <div className="space-y-4">
          <Link
            href={href}
            className="font-semibold text-lg hover:text-primary transition-all"
          >
            {job.title}
          </Link>
          <div className="flex items-center gap-x-4 text-muted-foreground mt-4">
            <p className="flex items-center">
              <Building2 className="w-4 h-4 ml-1" /> {job.company.name}
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
            </p>
            <p className="flex items-center">
              <Clock7 className="w-4 h-4 ml-1" /> 11 ساعت پیش
            </p>
            <p className="text-green-500">{job.salary}</p>
          </div>
          <Badge className="rounded-full">{mapJobType[job.jobType]}</Badge>
        </div>
      </div>
      <Button size="icon" variant="ghost">
        <Bookmark className="w-4 h-4 text-muted-foreground" />
      </Button>
    </div>
  );
}
