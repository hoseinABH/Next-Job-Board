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
