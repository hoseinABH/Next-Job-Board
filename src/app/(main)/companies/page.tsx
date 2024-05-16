// Common components
// Local components
import FilterSection from './_components/filter-section';
// Services
// Types
import type { Metadata } from 'next';
// Configs

export const metadata: Metadata = {
  title: 'شرکت‌ها',
};

export default async function Companies() {
  return (
    <section className="py-12">
      <div className="space-y-8">
        <FilterSection />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              href={`${Routes.COMPANIES}/${company.id}`}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}
