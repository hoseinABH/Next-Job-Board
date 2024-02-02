'use client';
// UI Frameworks
import { SlidersHorizontal } from 'lucide-react';
// Common components
import JobCard from '@/components/job-card';
import IconButton from '@/components/icon-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import JobsActions from '@/store/Jobs/jobs.actions';
// Configs
import { landingJobs } from '@/config/app';

interface Props {
  className?: string;
}
export default function JobsList({ className }: Props) {
  const dispatch = useAppDispatch();
  function openFilterSheet() {
    dispatch(JobsActions.setModalOpen(true, 'filter'));
  }
  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground hidden sm:block">
          <span className="font-semibold ml-1">{landingJobs.length}</span> فرصت
          کارآموزی یافت شد
        </p>
        <div className="flex w-full sm:w-max items-center gap-x-2">
          <Select>
            <SelectTrigger className="flex w-full sm:w-36">
              <SelectValue placeholder="مرتب سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-relevant">مرتبط بودن</SelectItem>
              <SelectItem value="recent">جدیدترین</SelectItem>
              <SelectItem value="highest-salary">بیشترین حقوق</SelectItem>
            </SelectContent>
          </Select>
          <IconButton
            title="فیلتر"
            className="flex lg:hidden"
            onClick={openFilterSheet}
          >
            <SlidersHorizontal />
          </IconButton>
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
