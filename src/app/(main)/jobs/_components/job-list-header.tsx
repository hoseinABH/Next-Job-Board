'use client';
// UI Frameworks
import { SlidersHorizontal } from 'lucide-react';
// Common components
import JobSearch from '@/components/job-search';
import IconButton from '@/components/icon-button';
import SelectBox from '@/components/select-box';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import JobsActions from '@/store/Jobs/jobs.actions';

interface Props {
  count: number;
}
export default function JobListHeader({ count }: Props) {
  const dispatch = useAppDispatch();
  function openFilterSheet() {
    dispatch(JobsActions.setModalOpen(true, 'filter'));
  }
  return (
    <>
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground hidden sm:block">
          <span className="font-semibold ml-1">{count}</span> فرصت کارآموزی یافت
          شد
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
    </>
  );
}