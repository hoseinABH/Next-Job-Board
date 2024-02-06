'use client';
// UI Frameworks
import { SlidersHorizontal } from 'lucide-react';
// Common components
import JobCard from '@/components/job-card';
import IconButton from '@/components/icon-button';
import JobSearch from '@/components/job-search';
import SelectBox from '@/components/select-box';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import JobsActions from '@/store/Jobs/jobs.actions';
// Configs
import { landingJobs } from '@/config/app';
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
}
export default function JobsList({ className }: Props) {
  const dispatch = useAppDispatch();
  function openFilterSheet() {
    dispatch(JobsActions.setModalOpen(true, 'filter'));
  }
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground hidden sm:block">
          <span className="font-semibold ml-1">{landingJobs.length}</span> فرصت
          کارآموزی یافت شد
        </p>
        <div className="flex w-full sm:w-max items-center gap-x-2">
          <SelectBox
            options={[
              { title: 'مرتبط ترین', value: 'mostRelevant' },
              { title: 'جدید ترین', value: 'mostRecent' },
              { title: 'بالاترین حقوق', value: 'highestSalary' },
            ]}
            placeholder="مرتب سازی"
          />
          <IconButton className="flex lg:hidden" onClick={openFilterSheet}>
            <SlidersHorizontal />
          </IconButton>
        </div>
      </div>
      <JobSearch />
      <div className="flex flex-col gap-y-4">
        {landingJobs.map((job) => (
          <JobCard key={job.id} job={job} href={`${Routes.JOBS}/${job.id}`} />
        ))}
      </div>
    </div>
  );
}
