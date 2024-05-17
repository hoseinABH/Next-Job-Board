'use client';
// UI Frameworks
import { GraduationCap, MapPinIcon, Timer, BadgeDollarSign } from 'lucide-react';
// Common components
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';
import { addCommas } from '@persian-tools/persian-tools';
// Actions
import InternshipsActions from '@/store/Internship/internship.actions';
// Hooks
import { useAppDispatch } from '@/hooks/store';
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
  const information = [
    {
      id: 1,
      title: 'حقوق',
      icon: BadgeDollarSign,
      value: `${addCommas(position.salary)} تومان`,
    },
    {
      id: 2,
      title: 'محل کارآموزی',
      icon: MapPinIcon,
      value: position.companyProfile.city,
    },
    {
      id: 3,
      title: 'مقطع تحصیلی',
      icon: GraduationCap,
      value: position.grade,
    },
    {
      id: 4,
      title: 'مهلت ارسال درخواست',
      icon: Timer,
      value: new Date(position.submissionDeadline).toLocaleDateString('fa-IR'),
    },
  ];
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <ul className="space-y-6">
          {information.map((info) => (
            <li key={info.id} className="space-y-2">
              <h6 className="flex items-center font-normal text-muted-foreground">
                <info.icon className="ml-1 h-4 w-4 text-primary" /> {info.title}
              </h6>
              <p>{info.value}</p>
            </li>
          ))}
        </ul>
        <Separator className="my-4" />
        <p className="text-muted-foreground">درخواست برای این موقعیت</p>
        <Button size="lg" className="mt-4 w-full" onClick={applicationRequest}>
          ارسال درخواست
        </Button>
      </CardContent>
    </Card>
  );
}
