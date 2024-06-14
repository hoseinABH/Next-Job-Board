// Common components
import SearchForm from '@/components/search-form';
import PaginationContainer from '@/components/pagination-container';
// Local components
import JobsList from './_components/jobs-list';
// Actions
import { getAllPositions } from '@/actions/internship';
// Utilities
import { getPaginationDataFromResponse } from '@/lib/utils';
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
    p?: string;
  };
}
export default async function Internships({ searchParams }: SearchParams) {
  const response = await getAllPositions({
    page: searchParams.p ?? '1',
    query: searchParams.q,
    city: searchParams.l,
  });
  const paginationData = getPaginationDataFromResponse(response);
  return (
    <div className="container space-y-8 px-4 py-24 sm:px-8">
      <div className="flex flex-col items-center justify-center">
        <SearchForm
          count={response.data.length}
          searchedData="فرصت کارآموزی"
          targetRoute={Routes.INTERNSHIPS}
        />
      </div>
      <JobsList positions={response.data} className="flex-1" />
      <PaginationContainer className="mt-6" paginationData={paginationData} />
    </div>
  );
}
