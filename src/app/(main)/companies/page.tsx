// Local components
import FilterSection from './_components/filter-section';
import CompaniesList from './_components/companies-list';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شرکت‌ها',
};

export default function Companies() {
  return (
    <section className="py-12">
      <div className="space-y-8">
        <FilterSection />
        <CompaniesList />
      </div>
    </section>
  );
}
