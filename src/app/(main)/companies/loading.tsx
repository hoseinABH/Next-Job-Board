import { Skeleton } from '@/components/ui/skeleton';

export default function CompaniesLoading() {
  return (
    <section className="py-12">
      <div className="space-y-8">
        <Skeleton className="h-20 w-full" />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton key={item} className="h-[180px] w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
