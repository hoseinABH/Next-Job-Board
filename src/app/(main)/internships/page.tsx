// Common components
import SearchForm from '@/components/search-form';
// Local components
import JobsList from './_components/jobs-list';
// Actions
import { getAllPositions } from '@/actions/positions';
// Types
import type { Metadata } from 'next';
// Constants
import * as Routes from '@/config/routes';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
  description: 'لیست فرصت های کارآموزی',
};
interface SearchParams {
  searchParams: {
    q?: string;
    l?: string;
  };
}
export default async function Internships({ searchParams }: SearchParams) {
  // await new Promise((res) => setTimeout(res, 60000));
  const positions = await getAllPositions({
    page: '1',
    query: searchParams.q,
    city: searchParams.l,
  });
  return (
    <div className="space-y-8 py-4 lg:py-12">
      <div className="flex flex-col items-center justify-center">
        <SearchForm
          count={positions.length}
          searchedData="فرصت کارآموزی"
          targetRoute={Routes.INTERNSHIPS}
        />
      </div>
      <JobsList positions={positions} className="flex-1" />
    </div>
  );
}
