// Common components
import CompanyCard from '@/components/company-card';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import { landingCompanies } from '@/config/app';
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
}
export default function CompaniesList({ className }: Props) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 w-full gap-6 lg:grid-cols-3',
        className
      )}
    >
      {landingCompanies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          href={`${Routes.COMPANIES}/${company.id}`}
        />
      ))}
    </div>
  );
}
