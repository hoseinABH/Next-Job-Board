import BackButton from '@/components/back-button';
import Heading from './_components/heading';
import { Skeleton } from '@/components/ui/skeleton';

export default function ApplicationLoading() {
  return (
    <div className="rounded-md bg-card p-6">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <BackButton>بازگشت به درخواست ها</BackButton>
      </div>
      <div className="space-y-8 py-12">
        <div className="space-y-8">
          <Heading>اطلاعات شخصی</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Skeleton key={item} className="h-6 w-36" />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>سوابق شغلی</Heading>
          <div className="space-y-3">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-3 w-[120px]" />
            <Skeleton className="h-3 w-[140px]" />
            <Skeleton className="h-3 w-[80%]" />
            <Skeleton className="h-3 w-[70%]" />
          </div>
        </div>
        <div className="space-y-8">
          <Heading>سوابق تحصیلی</Heading>
          <div className="space-y-3">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-3 w-[120px]" />
            <Skeleton className="h-3 w-[140px]" />
            <Skeleton className="h-3 w-[80%]" />
            <Skeleton className="h-3 w-[70%]" />
          </div>
        </div>
        <div className="space-y-8">
          <Heading>مهارت‌ها</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2].map((skeleton) => (
              <Skeleton key={skeleton} className="h-14 w-full" />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>زبان‌ها</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2].map((skeleton) => (
              <Skeleton key={skeleton} className="h-14 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
