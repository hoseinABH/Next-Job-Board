'use client';
import { useEffect } from 'react';
// Common components
import CompanyCard from '@/components/company-card';
import { Skeleton } from '@/components/ui/skeleton';
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
  const { companies, loading } = useAppSelector((state) => state.company);
  useEffect(() => {
    dispatch(CompanyActions.fillCompanies(null, { sagas: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 w-full gap-6 lg:grid-cols-4',
        className
      )}
    >
      {loading.getAllCompanies ? (
        <SkeletonLoading />
      ) : (
        <>
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              href={`${Routes.COMPANIES}/${company.id}`}
            />
          ))}
        </>
      )}
    </div>
  );
}

export function SkeletonLoading() {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Skeleton key={item} className="w-full h-[180px]" />
  ));
}
