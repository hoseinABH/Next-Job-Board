import BackButton from '@/components/back-button';
import InfoCard from './_components/info-card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ApplicationLoading() {
  return (
    <div className="rounded-md bg-card p-2 sm:p-6">
      <BackButton>بازگشت به درخواست ها</BackButton>
      <div className="space-y-8 py-8">
        <InfoCard loading title="درباره من">
          <div className="space-y-2">
            <Skeleton className="h-5 w-56" />
            <Skeleton className="h-4 w-44" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-[70%]" />
            </div>
          </div>
        </InfoCard>
        <InfoCard loading title="مشخصات فردی">
          <div className="flex flex-col gap-y-4">
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="flex items-center gap-x-8 sm:gap-x-16">
                <Skeleton className="h-5 w-full sm:w-24" />
                <Skeleton className="h-5 w-full  sm:w-28" />
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard loading title="سوابق شغلی">
          <div className="space-y-3">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-3 w-[120px]" />
            <Skeleton className="h-3 w-[140px]" />
            <Skeleton className="h-3 w-[80%]" />
            <Skeleton className="h-3 w-[70%]" />
          </div>
        </InfoCard>
        <InfoCard loading title="سوابق تحصیلی">
          <div className="space-y-3">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-3 w-[120px]" />
            <Skeleton className="h-3 w-[140px]" />
            <Skeleton className="h-3 w-[80%]" />
            <Skeleton className="h-3 w-[70%]" />
          </div>
        </InfoCard>
        <InfoCard loading title="مهارت ها">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {[1, 2].map((skeleton) => (
              <Skeleton key={skeleton} className="h-14 w-full" />
            ))}
          </div>
        </InfoCard>
        <InfoCard loading title="زبان ها">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {[1, 2].map((skeleton) => (
              <Skeleton key={skeleton} className="h-14 w-full" />
            ))}
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
