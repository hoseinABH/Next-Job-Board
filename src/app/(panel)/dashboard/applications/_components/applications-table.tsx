'use client';
// Common components
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useRouter } from 'next/navigation';
// Types
import type { InternshipRequestItem } from '@/types/company';
// Constants
import * as Routes from '@/config/routes';
import { mapApplicationStatus } from '@/constants/company';

interface Props {
  className?: string;
  applications: InternshipRequestItem[];
}

export default function ApplicationsTable({ className, applications }: Props) {
  const router = useRouter();
  function onSelect(userProfileId: number) {
    router.push(`${Routes.DASHBOARD_APPLICATIONS}/${userProfileId}`);
  }
  return (
    <div className={cn('rounded-md bg-card p-6', className)}>
      <div>
        <h1 className="text-2xl font-bold">درخواست های شغلی</h1>
        <p className="text-md text-muted-foreground">لیست درخواست های شغلی</p>
      </div>
      <div className="mt-8 rounded-md border">
        <Table className="text-nowrap">
          <TableHeader>
            <TableRow className="h-16">
              <TableHead className="text-center">کارجو</TableHead>
              <TableHead className="text-center">موقعیت شغلی</TableHead>
              <TableHead className="text-center">تاریخ درخواست</TableHead>
              <TableHead className="text-center">وضعیت</TableHead>
              <TableHead className="text-center">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow
                key={application.userProfileId}
                onClick={() => onSelect(application.userProfileId)}
                className="h-20 cursor-pointer"
              >
                <TableCell align="center" className="font-medium">
                  {application.userProfileName}
                </TableCell>
                <TableCell align="center">{application.positionTitle}</TableCell>
                <TableCell align="center">
                  {new Date(application.requestDate).toLocaleDateString('fa-IR')}
                </TableCell>
                <TableCell align="center">
                  <Badge variant={mapApplicationStatus[application.status].status}>
                    {mapApplicationStatus[application.status].title}
                  </Badge>
                </TableCell>
                {/* <TableCell align="center">
                  <IconButton variant="outline" onClick={openResume}>
                    <Eye className="h-4 w-4" />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
