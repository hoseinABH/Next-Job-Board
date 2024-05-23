import Link from 'next/link';
// UI Frameworks
import { Building2, MapPin } from 'lucide-react';
// Common components
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
import { addCommas } from '@persian-tools/persian-tools';
// Types
import type { PositionItem } from '@/types/internship';
import { Skeleton } from './ui/skeleton';

interface Props {
  position: PositionItem;
  className?: string;
  href?: string;
  onBookmark?: () => void;
}

export default function JobCard({ className, position, href = '/' }: Props) {
  return (
    <Link href={href} className={cn('', className)}>
      <Card>
        <CardContent className="flex flex-col justify-center p-6  sm:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-x-4 md:flex-row">
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <h2 className="text-lg font-semibold  transition-all">{position.title}</h2>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-muted-foreground sm:flex-wrap">
                <p className="flex items-center">
                  <Building2 className="ml-1 h-4 w-4" /> {position.companyProfile.title}
                </p>
                <p className="flex items-center">
                  <MapPin className="ml-1 h-4 w-4" /> {position.companyProfile.city ?? '-'}
                </p>
              </div>
              <p className="flex items-baseline text-muted-foreground">
                حقوق {addCommas(position.salary)} تومان
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function JobCardSkeleton() {
  return (
    <Card className="">
      <CardContent className="flex flex-col justify-center p-6  sm:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-x-4 md:flex-row">
          <div className="flex flex-col items-center gap-y-2 md:items-start">
            <Skeleton className="mb-2 h-6 w-60" />
            <div className="mt-1 flex flex-wrap items-center gap-2 text-muted-foreground sm:flex-wrap">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="mt-1 h-4 w-36" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
