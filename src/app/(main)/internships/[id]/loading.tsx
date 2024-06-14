import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container h-full w-full space-y-8 px-4 py-24 sm:px-8">
      <Skeleton className="h-5 w-36" />
      <Skeleton className="h-6 w-52" />
      <div className="relative flex h-[60vh] w-full flex-col-reverse gap-6 lg:flex-row">
        <Card className="h-full w-full flex-1">
          <CardContent className="space-y-4 p-6">
            <Skeleton className="mb-8 h-6 w-44" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[70%]" />
          </CardContent>
        </Card>
        <Card className="relative top-auto col-span-3 h-full w-full lg:sticky lg:top-[100px] lg:w-[300px]">
          <CardContent className="flex h-full flex-col justify-between p-6">
            <div className="space-y-4">
              <Skeleton className="mb-8 h-6 w-44" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[70%]" />
            </div>
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
