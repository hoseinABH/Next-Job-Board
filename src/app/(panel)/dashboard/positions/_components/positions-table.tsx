'use client';
// Common components
import PaginationContainer from '@/components/pagination-container';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Settings2 } from 'lucide-react';
import ActivationDropdown from './activation-drop-down';
import PositionsHeader from './positions-header';
// Actions
import { updateActivation } from '@/actions/internship';
// Utilities
import { differenceInDays } from '@/lib/date';
import { cn } from '@/lib/utils';
import { addCommas } from '@persian-tools/persian-tools';
// Hooks
import useCompanyStore from '@/store/company';
import { useTransition } from 'react';
// Constants
import { mapEducationGrade } from '@/constants/user';
// Types
import type { InternshipItem } from '@/types/company';
import type { PositionActivationDto } from '@/types/internship';
import type { PaginationData } from '@/types/common';

interface Props {
  className?: string;
  positions: InternshipItem[];
  paginationData: PaginationData;
}

export default function PositionsTable({ className, positions, paginationData }: Props) {
  const { openModal } = useCompanyStore();
  function openEditModal(position: InternshipItem) {
    openModal(true, 'createPosition', position);
  }
  const [pending, startTransition] = useTransition();

  function determineActivation(data: PositionActivationDto) {
    startTransition(() => {
      updateActivation(data);
    });
  }
  return (
    <div className={cn('rounded-md bg-card p-6', className)}>
      <PositionsHeader />
      {positions.length ? (
        <div className="mt-8 overflow-hidden rounded-md border">
          <Table className="text-nowrap">
            <TableHeader>
              <TableRow className="h-16">
                <TableHead className="text-center">ردیف</TableHead>
                <TableHead className="text-center">عنوان شغل</TableHead>
                <TableHead className="text-center">مقطع تحصیلی</TableHead>
                <TableHead className="text-center">حقوق</TableHead>
                <TableHead className="text-center">مهلت درخواست</TableHead>
                <TableHead className="text-center">استخدام فوری</TableHead>
                <TableHead className="text-center">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((position, index) => (
                <TableRow
                  key={position.id}
                  className={cn('h-20', {
                    ['blur-[1.2px]']: !position.isActive,
                  })}
                  title={!position.isActive ? 'غیر فعال' : ''}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{position.title}</TableCell>
                  <TableCell align="center">{mapEducationGrade[position.grade]}</TableCell>
                  <TableCell align="center">{addCommas(position.salary)} تومان</TableCell>
                  <TableCell align="center">
                    {differenceInDays(position.submissionDeadline)}
                  </TableCell>
                  <TableCell align="center" className="space-x-4">
                    {position.immediateRecruitment ? (
                      <Badge variant="destructive">فوری</Badge>
                    ) : (
                      <Badge variant="outline">عادی</Badge>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <ActivationDropdown
                      positionId={position.id}
                      action={determineActivation}
                      pending={pending}
                      isActive={position.isActive}
                    />
                    <button className="mr-2" title="ویرایش" onClick={() => openEditModal(position)}>
                      <Settings2 className="h-5 w-5" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : null}
      <PaginationContainer paginationData={paginationData} />
    </div>
  );
}
