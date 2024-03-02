'use client';
import { useEffect } from 'react';
// Local components
import CompanyHeader from './_components/company-header';
import CompanyTabs from './_components/company-tabs';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import CompanyActions from '@/store/Company/company.actions';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  params: {
    id: string;
  };
}

export default function Company({ params }: Props) {
  const dispatch = useAppDispatch();
  const { companyDetails, loading } = useAppSelector((state) => state.company);
  useEffect(() => {
    dispatch(CompanyActions.selectCompany(null, params.id, { sagas: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  return (
    <section className="py-12 space-y-8">
      {companyDetails ? (
        loading.getCompanyById ? (
          <SkeletonLoading />
        ) : (
          <>
            <CompanyHeader company={companyDetails} />
            <CompanyTabs company={companyDetails} />
          </>
        )
      ) : null}
    </section>
  );
}

function SkeletonLoading() {
  return (
    <>
      <div className="flex items-center justify-center gap-y-4 flex-col">
        <Skeleton className="h-20 w-20" />
        <Skeleton className="h-4 w-40" />
        <div className="flex gap-x-2 items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="w-72 h-14" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-[80%] h-4" />
      </div>
    </>
  );
}
