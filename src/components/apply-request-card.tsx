// Common components
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Building2, CalendarRange } from 'lucide-react';
import Image from 'next/image';
// Utilities
import { dateWithMonthTitle } from '@/lib/date';
import { cn } from '@/lib/utils';
// Constants
import { mapApplicationStatus } from '@/constants/company';
// Types
import type { UserApplyRequest } from '@/types/user';

interface Props {
  className?: string;
  request: UserApplyRequest;
}

export default function ApplyRequestCard({ className, request }: Props) {
  return (
    <Card key={request.requestId} className={cn('flex items-start justify-between p-6', className)}>
      <div className="flex items-start gap-x-4">
        <Image
          src="/companies/alibaba.webp"
          className="rounded-sm drop-shadow-md"
          width={60}
          height={60}
          alt={request.positionTitle}
        />
        <div className="space-y-2">
          <h2 className="font-bold text-primary">{request.positionTitle}</h2>
          <p className="flex items-center text-muted-foreground">
            <Building2 className="ml-1 h-4 w-4" /> {request.companyProfile.title}
          </p>
          <p className="flex items-center text-muted-foreground">
            <CalendarRange className="ml-1 h-4 w-4" /> تاریخ ارسال درخواست:{' '}
            {dateWithMonthTitle(request.requestDate)}
          </p>
        </div>
      </div>
      <Badge variant={mapApplicationStatus[request.status].status}>
        {mapApplicationStatus[request.status].title}
      </Badge>
    </Card>
  );
}
