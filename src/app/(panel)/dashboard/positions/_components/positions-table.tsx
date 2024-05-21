'use client';
// Common components
import IconButton from '@/components/icon-button';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
import { addCommas } from '@persian-tools/persian-tools';
// Constants
import { mapEducationGrade } from '@/constants/user';
// Types
import type { InternshipItem } from '@/types/company';

interface Props {
  className?: string;
  positions: InternshipItem[];
}

export default function PositionsTable({ className, positions }: Props) {
  function openCreatePositionModal() {
    // dispatch(PanelActions.setModalOpen(true, 'createPosition'));
  }
  function openDeleteModal() {
    // dispatch(
    //   PanelActions.setDialogData({
    //     title: 'حذف موقعیت شغلی',
    //     message: 'آیا از حذف این موقعیت شغلی مطمئن هستید؟',
    //     model: {
    //       id: '',
    //       entity: 'position',
    //     },
    //   }),
    // );
    // dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <div className={cn('bg-card p-6', className)}>
      <div className="flex flex-col justify-between  gap-4 sm:flex-row sm:gap-0">
        <div>
          <h1 className="text-2xl font-bold">موقعیت های شغلی</h1>
          <p className="text-md text-muted-foreground">
            {positions.length ? 'لیست موقعیت های شغلی شرکت' : 'اولین موقعیت شغلی خود را بسازید'}
          </p>
        </div>
        <Button onClick={openCreatePositionModal}>موقعیت شغلی جدید</Button>
      </div>
      {positions.length ? (
        <div className="mt-8 rounded-md border">
          <Table className="text-nowrap">
            <TableHeader>
              <TableRow className="h-16">
                <TableHead className="text-center">عنوان شغل</TableHead>
                <TableHead className="text-center">مقطع تحصیلی</TableHead>
                <TableHead className="text-center">حقوق</TableHead>
                <TableHead className="text-center">استخدام فوری</TableHead>
                <TableHead className="text-center">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((position) => (
                <TableRow key={position.id} className="h-20">
                  <TableCell align="center" className="font-medium">
                    {position.title}
                  </TableCell>
                  <TableCell align="center">{mapEducationGrade[position.grade]}</TableCell>
                  <TableCell align="center">{addCommas(position.salary)} ریال</TableCell>
                  <TableCell align="center">
                    {position.immediateRecruitment ? (
                      <Badge variant="destructive">فوری</Badge>
                    ) : (
                      <Badge variant="outline">عادی</Badge>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton title="حذف" onClick={openDeleteModal}>
                      <Trash2 className="h-4 w-4" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}
