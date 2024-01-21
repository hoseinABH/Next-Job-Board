import Link from 'next/link';
import Image from 'next/image';
// UI Frameworks
import { Bookmark, MapPin, Building2, Clock7 } from 'lucide-react';
// Common components
import { Badge } from './ui/badge';
import IconButton from './icon-button';
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
        'flex flex-col sm:flex-row w-full justify-center md:justify-between shadow-md hover:shadow-none rounded-md px-8 py-6 bg-background dark:bg-secondary/30 transition-all hover:scale-95 relative',
        className
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-x-4">
        <Image
          src={job.company.image!}
          width={85}
          height={85}
          alt={job.company.name!}
          className="rounded-full"
        />
        <div className="flex flex-col items-center md:items-start gap-y-2">
          <Link
            href={href}
            className="font-semibold text-lg hover:text-primary transition-all"
          >
            {job.title}
          </Link>
          <div className="flex items-center flex-wrap sm:flex-wrap gap-2 text-muted-foreground mt-2">
            <p className="flex items-center">
              <Building2 className="w-4 h-4 ml-1" /> {job.company.name}
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
            </p>
            <p className="items-center hidden md:flex">
              <Clock7 className="w-4 h-4 ml-1" /> 11 ساعت پیش
            </p>
            <p className="text-green-500">{job.salary}</p>
          </div>
          <Badge className="rounded-full">{mapJobType[job.jobType]}</Badge>
        </div>
      </div>
      <IconButton title="ذخیره کردن" className="hidden md:flex">
        <Bookmark className="w-4 h-4 text-muted-foreground" />
      </IconButton>
    </div>
  );
}
