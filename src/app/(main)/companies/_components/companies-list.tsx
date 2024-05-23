// Common components
import CompanyCard from '@/components/company-card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { CompanyListItem } from '@/types/company';
// Constants
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
  companies: CompanyListItem[];
}
export default function CompaniesList({ className, companies }: Props) {
  return (
    <div className={cn('grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          href={`${Routes.COMPANIES}/${company.id}`}
        />
      ))}
    </div>
  );
}
