'use client';
// UI Frameworks
import { MapPinIcon, GraduationCap, BookText } from 'lucide-react';
// Common components
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Actions
import InternshipsActions from '@/store/Internship/internships.actions';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Constants
import { mapEducationLevel } from '@/constants';
import { requestTests } from '@/config/app';
// Types
import type { Position } from '@/types/internship';

interface Props {
  className?: string;
  position: Position;
}
export default function PositionDescription({ className, position }: Props) {
  const dispatch = useAppDispatch();
  function applicationRequest() {
    dispatch(InternshipsActions.setModalOpen(true, 'internshipApplication'));
  }
  return (
    <Card className={cn('', className)}>
      {/* <CardContent className="p-6">
        <ul className="space-y-6">
          <li className="space-y-2">
            <h6 className="flex items-center font-normal text-muted-foreground">
              <MapPinIcon className="ml-1 h-4 w-4 text-primary" /> محل کارآموزی:
            </h6>
            <p>{position.company.city}</p>
          </li>
          <li className="space-y-2">
            <h6 className="flex items-center font-normal text-muted-foreground">
              <GraduationCap className="ml-1 h-4 w-4 text-primary" /> مقطع تحصیلی:
            </h6>
            <p>{position.requiredEducationLevels.map((level) => mapEducationLevel[level]).join('،')}</p>
          </li>
          <li className="space-y-2">
            <h6 className="flex items-center font-normal text-muted-foreground">
              <BookText className="ml-1 h-4 w-4 text-primary" /> رشته تحصیلی:
            </h6>
            <p>{position.fieldOfStudy.join('،')}</p>
          </li>
        </ul>
        <Separator className="my-4" />
        <p className="mb-3 text-muted-foreground">تست های مورد نیاز:</p>
        <div className="space-y-2">
          {requestTests.map((test) => (
            <div
              key={test.key}
              className="flex h-14 items-center justify-center rounded-md border border-muted-foreground"
            >
              <p>{test.name}</p>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <p className="text-muted-foreground">درخواست برای این موقعیت:</p>
        <Button size="lg" className="mt-4 w-full" onClick={applicationRequest}>
          ارسال درخواست
        </Button>
      </CardContent> */}
    </Card>
  );
}
