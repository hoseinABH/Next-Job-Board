'use client';
import { useEffect } from 'react';
// Common components
import CompanyCard from '@/components/company-card';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import CompanyActions from '@/store/Company/company.actions';
// Configs
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
}
export default function CompaniesList({ className }: Props) {
  const dispatch = useAppDispatch();
  const { companies } = useAppSelector((state) => state.company);
  useEffect(() => {
    dispatch(CompanyActions.fillCompanies(null, { sagas: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(companies);
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 w-full gap-6 lg:grid-cols-4',
        className
      )}
    >
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
