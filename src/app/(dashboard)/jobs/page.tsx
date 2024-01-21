// Local components
import FilterSection from './_components/filter-section';
import JobsListSection from './_components/jobs-list';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های شغلی',
};

export default function Jobs() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-12 gap-6 relative">
        <FilterSection className="hidden lg:flex col-span-4 sticky top-[100px] left-0 h-1/2" />
        <JobsListSection className="col-span-12 lg:col-span-8" />
      </div>
    </section>
  );
}
