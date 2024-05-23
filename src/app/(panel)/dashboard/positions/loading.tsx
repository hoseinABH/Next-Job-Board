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
import PositionsHeader from './_components/positions-header';
import { Skeleton } from '@/components/ui/skeleton';

export default function PositionsLoading() {
  return (
    <div className="rounded-md bg-card p-6">
      <PositionsHeader />
      <div className="mt-8 rounded-md border">
        <Table className="text-nowrap">
          <TableHeader>
            <TableRow className="h-16">
              <TableHead className="text-center">ردیف</TableHead>
              <TableHead className="text-center">عنوان شغل</TableHead>
              <TableHead className="text-center">مقطع تحصیلی</TableHead>
              <TableHead className="text-center">حقوق</TableHead>
              <TableHead className="text-center">استخدام فوری</TableHead>
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
                <TableCell
                  align="center"
                  className="flex h-20 flex-1 items-center justify-center gap-x-2"
                >
                  <Skeleton className="h-8 w-8" />
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
