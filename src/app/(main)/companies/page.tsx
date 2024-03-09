// Common components
import CompanyCard from '@/components/company-card';
// Local components
import FilterSection from './_components/filter-section';
// Services
import { getCompanies } from '@/db/company';
// Types
import type { Metadata } from 'next';
// Configs
import * as Routes from '@/config/routes';

export const metadata: Metadata = {
  title: 'شرکت‌ها',
};

export default async function Companies() {
  const companies = await getCompanies();

  return (
    <section className="py-12">
      <div className="space-y-8">
        <FilterSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 lg:grid-cols-4">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              href={`${Routes.COMPANIES}/${company.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
