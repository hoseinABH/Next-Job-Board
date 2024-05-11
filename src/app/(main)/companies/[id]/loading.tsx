import { Skeleton } from '@/components/ui/skeleton';

export default function CompanyLoading() {
  return (
    <section className="space-y-8 py-12">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <Skeleton className="h-20 w-20" />
        <Skeleton className="h-4 w-40" />
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-14 w-72" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </section>
  );
}
