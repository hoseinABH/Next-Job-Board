'use client';
// Common components
import IconButton from '@/components/icon-button';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';
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
import type { Position } from '../../data';
// Constants
import { mapEducationLevel } from '@/constants';

interface Props {
  className?: string;
  positions: Position[];
}

export default function PositionTable({ className, positions }: Props) {
  return (
    <div className={cn('bg-card p-6', className)}>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">موقعیت های شغلی</h1>
          <p className="text-md text-muted-foreground">
            لیست موقعیت های شغلی شرکت
          </p>
        </div>
        <Button>موقعیت شغلی جدید</Button>
      </div>
      <div className="rounded-md border mt-8">
        <Table>
          <TableHeader>
            <TableRow className="h-16">
              <TableHead className="text-center">عنوان شغل</TableHead>
              <TableHead className="text-center">نوع قرارداد</TableHead>
              <TableHead className="text-center">حقوق</TableHead>
              <TableHead className="text-center">مقطع تحصیلی</TableHead>
              <TableHead className="text-center">استخدام فوری</TableHead>
              <TableHead className="text-center">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.title} className="h-20">
                <TableCell align="center" className="font-medium">
                  {position.title}
                </TableCell>
                <TableCell align="center">{position.contract}</TableCell>
                <TableCell align="center">{position.salary} ریال</TableCell>
                <TableCell align="center">
                  {mapEducationLevel[position.educationDegree]}
                </TableCell>
                <TableCell align="center">
                  {position.isUrgent ? (
                    <Badge variant="destructive">فوری</Badge>
                  ) : (
                    <Badge variant="outline">عادی</Badge>
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton title="حذف">
                    <Trash2 className="w-4 h-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
