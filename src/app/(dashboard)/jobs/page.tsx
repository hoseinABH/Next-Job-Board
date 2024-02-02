// Local components
import FilterSection from './_components/filter-section';
import JobsListSection from './_components/jobs-list';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
};

export default function Jobs() {
  return (
    <section className="py-12">
      <div className="flex gap-6 relative">
        <FilterSection className="hidden lg:block col-span-3 sticky top-[100px] w-[300px] h-fit" />
        <JobsListSection className="flex-1" />
      </div>
    </section>
  );
}
