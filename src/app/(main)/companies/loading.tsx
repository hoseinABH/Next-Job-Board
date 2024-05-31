import { CompanyCardSkeleton } from '@/components/company-card';
import { SearchFormSkeleton } from '@/components/search-form';

export default function CompaniesLoading() {
  return (
    <div className="container space-y-8 px-4 py-24 sm:px-8">
      <div className="flex flex-col items-center justify-center">
        <SearchFormSkeleton />
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <CompanyCardSkeleton key={item} />
        ))}
      </div>
    </div>
  );
}
