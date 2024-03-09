import { Skeleton } from '@/components/ui/skeleton';

export default function CompanyLoading() {
  return (
    <section className="py-12 space-y-8">
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
    </section>
  );
}
