'use client';
// UI Frameworks
import { MapPinIcon, GraduationCap, BookText } from 'lucide-react';
// Common components
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Constants
import { mapEducationLevel } from '@/constants';
// Types
import type { Job } from '@/types/jobs';

interface Props {
  className?: string;
  job: Job;
}
export default function PositionDescription({ className, job }: Props) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <ul className="space-y-6">
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <MapPinIcon className="h-4 w-4 ml-1 text-primary" /> محل کارآموزی:
            </h6>
            <p>مرکز علمی فناوری</p>
          </li>
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <GraduationCap className="h-4 w-4 ml-1 text-primary" /> مقطع
              تحصیلی:
            </h6>
            <p>{mapEducationLevel[job.level]}</p>
          </li>
          <li className="space-y-2">
            <h6 className="text-muted-foreground font-normal flex items-center">
              <BookText className="h-4 w-4 ml-1 text-primary" /> رشته تحصیلی:
            </h6>
            <p>{job.major.join('،')}</p>
          </li>
        </ul>
        <Separator className="my-4" />
        <p className="text-muted-foreground">درخواست برای این موقعیت:</p>
        <Button disabled size="lg" className="mt-4 w-full">
          مهلت ارسال درخواست به پایان رسیده
        </Button>
      </CardContent>
    </Card>
  );
}
