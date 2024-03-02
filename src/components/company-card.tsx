import Link from 'next/link';
import Image from 'next/image';
// Common components
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Maybe from './maybe';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
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
          className={cn('flex flex-col sm:flex-row p-6 items-center', {
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
              src="/javascript.webp"
              width={80}
              height={80}
              alt={company.name}
            />
            <div className="my-4 sm:my-0">
              <h4 className="font-semibold mb-2">{company.name}</h4>
              <span className="flex items-center  text-muted-foreground">
                <MapPin className="w-4 h-4 ml-1" />{' '}
                {company?.geolocation?.latitude}-
                {company?.geolocation?.latitude}
              </span>
            </div>
          </div>
          <Maybe condition={visibleOpenPositions}>
            <div className="flex gap-1">
              <span className="text-xl font-bold ">12</span> موقعیت شغلی فعال
            </div>
          </Maybe>
        </CardContent>
      </Card>
    </Link>
  );
}
