'use client';
// UI Frameworks
import { SlidersHorizontal } from 'lucide-react';
// Common components
import JobSearch from '@/components/job-search';
import IconButton from '@/components/icon-button';
import SelectBox from '@/components/select-box';

interface Props {
  count: number;
}
export default function JobListHeader({ count }: Props) {
  function openFilterSheet() {
    // dispatch(InternshipActions.setModalOpen(true, 'filter'));
  }
  return (
    <>
      <div className="flex items-center justify-between ">
        <p className="hidden text-muted-foreground sm:block">
          <span className="ml-1 font-semibold">{count}</span> فرصت کارآموزی یافت شد
        </p>
        <div className="flex w-full items-center gap-x-2 sm:w-max">
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
