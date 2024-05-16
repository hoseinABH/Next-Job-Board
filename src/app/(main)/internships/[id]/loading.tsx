import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="py-12">
      <div className="relative flex gap-6">
        <Skeleton className="sticky top-[100px] col-span-3 hidden h-72 w-[300px] lg:block" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-20 w-full" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
              <Skeleton key={skeleton} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
