'use client';
// UI Frameworks
import { SlidersHorizontal } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import JobSearch from '@/components/job-search';
import SelectField from '@/components/select-field';

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
        <div className="w-full sm:w-max">
          <IconButton className="flex lg:hidden" onClick={openFilterSheet}>
            <SlidersHorizontal />
          </IconButton>
        </div>
      </div>
      <JobSearch />
    </>
  );
}
