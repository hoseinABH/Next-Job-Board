import Image from 'next/image';
import Link from 'next/link';
// Common components
import { MapPin } from 'lucide-react';
import Maybe from './maybe';
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { CompanyListItem } from '@/types/company';
import { Skeleton } from './ui/skeleton';

interface Props {
  company: CompanyListItem;
  className?: string;
  href?: string;
  visibleOpenPositions?: boolean;
}

export default function CompanyCard({
  className,
  company,
  visibleOpenPositions = false,
  href = '/',
}: Props) {
  return (
    <Link href={href}>
      <Card className={cn('', className)}>
        <CardContent
          className={cn('flex flex-col items-center p-6 sm:flex-row', {
            ['justify-between']: visibleOpenPositions,
            ['justify-center']: !visibleOpenPositions,
          })}
        >
          <div
            className={cn('flex flex-col items-center gap-4', {
              ['flex-col sm:flex-row']: visibleOpenPositions,
              ['flex-col text-center']: !visibleOpenPositions,
            })}
          >
            <Image
              // src={company.logo}
              src="/companies/alibaba.webp"
              className="rounded-sm drop-shadow-md"
              width={60}
              height={60}
              alt={company.title}
            />
            <div className="my-4 sm:my-0">
              <h4 className="mb-2 font-semibold">{company.title}</h4>
              <span className="flex items-center  text-muted-foreground">
                <MapPin className="ml-1 h-4 w-4" /> {company.city ?? '-'}
              </span>
            </div>
          </div>
          <Maybe condition={visibleOpenPositions}>
            <div className="flex gap-1">
              <span className="text-xl font-bold ">{company.positionCount}</span> موقعیت شغلی فعال
            </div>
          </Maybe>
        </CardContent>
      </Card>
    </Link>
  );
}

export function CompanyCardSkeleton({ visibleOpenPositions }: Partial<Props>) {
  return (
    <Card>
      <CardContent
        className={cn('flex flex-col items-center p-6 sm:flex-row', {
          ['justify-between']: visibleOpenPositions,
          ['justify-center']: !visibleOpenPositions,
        })}
      >
        <div
          className={cn('flex flex-col items-center gap-4', {
            ['flex-col sm:flex-row']: visibleOpenPositions,
            ['flex-col text-center']: !visibleOpenPositions,
          })}
        >
          <Skeleton className="h-16 w-16" />
          <div className="my-4 space-y-4 sm:my-0">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
        <Maybe condition={Boolean(visibleOpenPositions)}>
          <div className="flex gap-1">
            <Skeleton className="h-6 w-24" />
          </div>
        </Maybe>
      </CardContent>
    </Card>
  );
}
