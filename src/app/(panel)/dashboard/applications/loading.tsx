// Common components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// Local components
import { Skeleton } from '@/components/ui/skeleton';

export default function ApplicationsLoading() {
  return (
    <div className="rounded-md bg-card p-6">
      <div>
        <h1 className="text-2xl font-bold">درخواست های شغلی</h1>
        <p className="text-md text-muted-foreground">لیست درخواست های شغلی</p>
      </div>
      <div className="mt-8 overflow-hidden rounded-md border">
        <Table className="text-nowrap">
          <TableHeader>
            <TableRow className="h-16">
              <TableHead className="text-center">ردیف</TableHead>
              <TableHead className="text-center">کارجو</TableHead>
              <TableHead className="text-center">موقعیت شغلی</TableHead>
              <TableHead className="text-center">تاریخ درخواست</TableHead>
              <TableHead className="text-center">نتیجه تست</TableHead>
              <TableHead className="text-center">وضعیت</TableHead>
              <TableHead className="text-center">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((item) => (
              <TableRow key={item} className="h-20">
                <TableCell align="center">
                  <Skeleton className="h-8 w-8" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-6 w-full sm:w-32" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-6 w-full sm:w-32" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-6 w-full sm:w-32" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-6 w-16" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-6 w-16" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton className="h-8 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
