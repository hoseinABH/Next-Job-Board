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
      <div className="grid grid-cols-12 gap-6 relative">
        <FilterSection className="hidden lg:flex col-span-3 sticky top-[100px]" />
        <JobsListSection className="col-span-12 lg:col-span-9" />
      </div>
    </section>
  );
}
