import Link from 'next/link';
import Image from 'next/image';
// Common components
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
  className?: string;
  href?: string;
}

export default function CompanyCard({ className, company, href = '/' }: Props) {
  return (
    <Link href={href}>
      <Card className={cn('cursor-pointer', className)}>
        <CardContent className="flex flex-col sm:flex-row p-6 justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-x-2">
            <Image
              src={company.image}
              width={85}
              height={85}
              alt={company.name}
            />
            <div className="my-4 sm:my-0">
              <h4 className="font-semibold mb-2">{company.name}</h4>
              <span className="flex items-center  text-muted-foreground">
                <MapPin className="w-4 h-4 ml-1" /> {company.location}
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-xl font-bold golden-text">
              {company.openPosition}
            </span>{' '}
            موقعیت شغلی فعال
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
