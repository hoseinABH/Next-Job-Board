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
import JobsActions from '@/store/Jobs/jobs.actions';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Constants
import { mapEducationLevel } from '@/constants';
import { requestTests } from '@/config/app';
// Types
import type { Job } from '@/types/jobs';

interface Props {
  className?: string;
  job: Job;
}
export default function PositionDescription({ className, job }: Props) {
  const dispatch = useAppDispatch();
  function applicationRequest() {
    dispatch(JobsActions.setModalOpen(true, 'jobApplication'));
  }
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <ul className="space-y-6">
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <MapPinIcon className="h-4 w-4 ml-1 text-primary" /> محل کارآموزی:
            </h6>
            <p>{job.company.city}</p>
          </li>
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <GraduationCap className="h-4 w-4 ml-1 text-primary" /> مقطع
              تحصیلی:
            </h6>
            <p>
              {job.requiredEducationLevels
                .map((level) => mapEducationLevel[level])
                .join('،')}
            </p>
          </li>
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <BookText className="h-4 w-4 ml-1 text-primary" /> رشته تحصیلی:
            </h6>
            <p>{job.fieldOfStudy.join('،')}</p>
          </li>
        </ul>
        <Separator className="my-4" />
        <p className="text-muted-foreground mb-3">تست های مورد نیاز:</p>
        <div className="space-y-2">
          {requestTests.map((test) => (
            <div
              key={test.key}
              className="flex h-14 items-center justify-center border border-muted-foreground rounded-md"
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
      </CardContent>
    </Card>
  );
}
