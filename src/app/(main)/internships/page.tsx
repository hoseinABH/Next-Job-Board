// Local components
import { DivideCircle } from 'lucide-react';
import FilterSection from './_components/filter-section';
import FilterSheet from './_components/filter-sheet';
import JobsList from './_components/jobs-list';
// Actions
import { getAllPositions } from '@/actions/positions';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فرصت های کارآموزی',
};

interface SearchParams {
  searchParams: {
    q?: string;
    l?: string;
  };
}
export default async function Internships({ searchParams }: SearchParams) {
  const positions = await getAllPositions({
    page: '1',
    query: searchParams.q,
    city: searchParams.l,
  });
  return (
    <div className="space-y-8 py-4 lg:py-12">
      <div className="relative flex gap-6">
        <FilterSection className="sticky top-[100px] col-span-3 hidden h-fit w-[300px] lg:block" />
        <JobsList positions={positions} className="flex-1" />
      </div>
      <FilterSheet>
        <FilterSection visibleHeader={false} className="mx-2 my-4" />
      </FilterSheet>
    </div>
  );
}
