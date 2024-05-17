// Local components
import FilterSection from './_components/filter-section';
import FilterSheet from './_components/filter-sheet';
import JobsList from './_components/jobs-list';
// Database
import { getAllPositions } from '@/db/positions';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
};

export default async function Internships() {
  const positions = await getAllPositions({ page: 1 });
  return (
    <section className="py-12">
      <div className="relative flex gap-6">
        <FilterSection className="sticky top-[100px] col-span-3 hidden h-fit w-[300px] lg:block" />
        <JobsList positions={positions} className="flex-1" />
      </div>
      <FilterSheet>
        <FilterSection visibleHeader={false} className="mx-2 my-4" />
      </FilterSheet>
    </section>
  );
}
