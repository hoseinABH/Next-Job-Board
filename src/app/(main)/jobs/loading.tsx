import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="py-12">
      <div className="flex gap-6 relative">
        <Skeleton className="hidden lg:block col-span-3 sticky top-[100px] w-[300px] h-72" />
        <div className="space-y-4 flex-1">
          <Skeleton className="w-full h-20" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((skeleton) => (
              <Skeleton key={skeleton} className="w-full h-40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
