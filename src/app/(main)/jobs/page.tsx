// Local components
import FilterSection from './_components/filter-section';
import FilterSheet from './_components/filter-sheet';
import JobsListSection from './_components/jobs-list';
// Services
import { getAllPositions } from '@/db/positions';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
};

export default async function Jobs() {
  await new Promise((res) => setTimeout(res, 4000));
  const positions = await getAllPositions();
  return (
    <section className="py-12">
      <div className="flex gap-6 relative">
        <FilterSection className="hidden lg:block col-span-3 sticky top-[100px] w-[300px] h-fit" />
        <JobsListSection positions={positions} className="flex-1" />
      </div>
      <FilterSheet>
        <FilterSection visibleHeader={false} className="my-4 mx-2" />
      </FilterSheet>
    </section>
  );
}
