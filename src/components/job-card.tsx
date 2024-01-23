import Link from 'next/link';
import Image from 'next/image';
// UI Frameworks
import { Bookmark, MapPin, Building2, } from 'lucide-react';
// Common components
import IconButton from './icon-button';
import { Card, CardContent } from './ui/card';
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
    <Card className={cn('', className)}>
      <CardContent className="p-6 flex flex-col sm:flex-row  justify-center md:justify-between">
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
              className="font-semibold text-lg golden-text transition-all"
            >
              {job.title} ({mapJobType[job.jobType]})
            </Link>
            <div className="flex items-center flex-wrap sm:flex-wrap gap-2 text-muted-foreground mt-2">
              <p className="flex items-center">
                <Building2 className="w-4 h-4 ml-1" /> {job.company.name}
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 ml-1" /> {job.company.location}
              </p>
            </div>
            <p className="text-muted-foreground flex items-baseline"> حقوق {job.salary}</p>
          </div>
        </div>
        <IconButton title="ذخیره کردن" className="hidden md:flex">
          <Bookmark className="w-4 h-4 text-muted-foreground" />
        </IconButton>
      </CardContent>
    </Card>
  );
}
