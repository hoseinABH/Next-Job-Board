import { Skeleton } from '@/components/ui/skeleton';

export default function CompaniesLoading() {
  return (
    <section className="py-12">
      <div className="space-y-8">
        <Skeleton className="w-full h-20" />
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton key={item} className="w-full h-[180px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
