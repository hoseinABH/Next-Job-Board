'use client';
// Common components
import IconButton from '@/components/icon-button';
import { Eye } from 'lucide-react';
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
// Types
import type { Application } from '../data';

interface Props {
  className?: string;
  applications: Application[];
}

export default function ApplicationsTable({ className, applications }: Props) {
  return (
    <div className={cn('bg-card p-6', className)}>
      <div>
        <h1 className="text-2xl font-bold">درخواست های شغلی</h1>
        <p className="text-md text-muted-foreground">لیست درخواست های شغلی</p>
      </div>
      <div className="rounded-md border mt-8">
        <Table className="text-nowrap">
          <TableHeader>
            <TableRow className="h-16">
              <TableHead className="text-center">کارجو</TableHead>
              <TableHead className="text-center">موقعیت شغلی</TableHead>
              <TableHead className="text-center">تاریخ درخواست</TableHead>
              <TableHead className="text-center">نمایش رزومه</TableHead>
              <TableHead className="text-center">وضعیت</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.applicant} className="h-20">
                <TableCell align="center" className="font-medium">
                  {application.applicant}
                </TableCell>
                <TableCell align="center">{application.position}</TableCell>
                <TableCell align="center">
                  {application.requestDate.toLocaleDateString('fa-IR')}
                </TableCell>
                <TableCell align="center">
                  <IconButton variant="outline">
                    <Eye className="w-4 h-4" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  {application.status === 'confirm' ? (
                    <Badge variant="destructive">رد شده</Badge>
                  ) : (
                    <Badge variant="success">تایید برای مصاحبه</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
