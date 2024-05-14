// Common components
import JobCard from '@/components/job-card';
// Local components
import JobListHeader from './job-list-header';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Job } from '@/types/internship';

interface Props {
  className?: string;
  positions: Job[];
}
export default async function JobsList({ className, positions }: Props) {
  return (
    <div className={cn('space-y-4', className)}>
      <JobListHeader count={positions.length} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {positions.map((job) => (
          <JobCard key={job.id} job={job} href={`${Routes.JOBS}/${job.id}`} />
        ))}
      </div>
    </div>
  );
}
