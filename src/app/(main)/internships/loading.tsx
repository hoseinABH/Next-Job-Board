import { JobCardSkeleton } from '@/components/job-card';
import { SearchFormSkeleton } from '@/components/search-form';

export default function Loading() {
  return (
    <div className="flex-1 space-y-10 py-12">
      <div className="flex flex-col items-center justify-center">
        <SearchFormSkeleton />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
          <JobCardSkeleton key={skeleton} />
        ))}
      </div>
    </div>
  );
}
