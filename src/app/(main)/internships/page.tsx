// Local components
import FilterSection from './_components/filter-section';
import FilterSheet from './_components/filter-sheet';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
};

export default async function Internships() {
  return (
    <section className="py-12">
      <div className="relative flex gap-6">
        <FilterSection className="sticky top-[100px] col-span-3 hidden h-fit w-[300px] lg:block" />
        {/* <JobsListSection positions={positions} className="flex-1" /> */}
      </div>
      <FilterSheet>
        <FilterSection visibleHeader={false} className="mx-2 my-4" />
      </FilterSheet>
    </section>
  );
}
