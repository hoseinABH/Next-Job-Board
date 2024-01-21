'use client';
// Common components
import JobCard from '@/components/job-card';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import { landingJobs } from '@/config/app';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  className?: string;
}
export default function JobsList({ className }: Props) {
  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground hidden sm:block">
          <span className="font-semibold ml-1">{landingJobs.length}</span> فرصت شغلی یافت شد
        </p>
        <div className="flex items-center gap-x-4">
          <Select>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="مرتب سازی" />
            </SelectTrigger>
            <SelectContent className="w-12">
              <SelectItem value="most-relevant">مرتبط بودن</SelectItem>
              <SelectItem value="recent">جدیدترین</SelectItem>
              <SelectItem value="highest-salary">بیشترین حقوق</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {landingJobs.map((job) => (
          <JobCard key={job.title} job={job} />
        ))}
      </div>
    </div>
  );
}
