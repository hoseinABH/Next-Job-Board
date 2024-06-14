import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container space-y-8 px-4 py-24 sm:px-8">
      <h1 className="text-xl text-muted-foreground">درخواست‌های ارسال‌شده به کارفرما</h1>
      {[1, 2, 3, 4].map((request) => (
        <Card key={request} className="flex items-start justify-between p-6">
          <div className="flex items-start gap-x-4">
            <Skeleton className="h-16 w-16 rounded-sm drop-shadow-md" />
            <div className="space-y-2">
              <Skeleton className="mb-4 h-6 w-48" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
          <Skeleton className="h-6 w-16" />
        </Card>
      ))}
    </div>
  );
}
