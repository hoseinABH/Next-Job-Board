// Local components
import CompaniesList from './_components/companies-list';
// Common components
import SearchForm from '@/components/search-form';
// Actions
import { getAllCompanies } from '@/actions/company';
// Types
import type { Metadata } from 'next';
// Configs
import * as Routes from '@/config/routes';

export const metadata: Metadata = {
  title: 'شرکت‌ها',
  description: 'لیست شرکت ها',
};
interface SearchParams {
  searchParams: {
    q?: string;
    l?: string;
  };
}

export default async function Companies({ searchParams }: SearchParams) {
  const companies = await getAllCompanies({
    page: '1',
    keyword: searchParams.q,
    city: searchParams.l,
  });
  return (
    <div className="space-y-8 py-4 lg:py-12">
      <div className="flex flex-col items-center justify-center">
        <SearchForm count={companies.length} searchedData="شرکت" targetRoute={Routes.COMPANIES} />
      </div>
      <CompaniesList companies={companies} />
    </div>
  );
}
