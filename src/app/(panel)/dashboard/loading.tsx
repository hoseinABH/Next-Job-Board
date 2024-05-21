import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <Card className="flex items-center justify-between p-6" key={item}>
          <div className="space-y-2">
            <Skeleton className="h-7 w-24 sm:w-44" />
            <Skeleton className="h-7 w-12" />
          </div>
          <Skeleton className="h-8 w-8 " />
        </Card>
      ))}
    </div>
  );
}
