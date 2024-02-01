import Link from 'next/link';
// Common components
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
      <Card className={cn('', className)}>
        <CardContent className="flex flex-col sm:flex-row p-6 justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-x-2">
            <div className="my-4 sm:my-0">
              <h4 className="font-semibold mb-2">{company.name}</h4>
              <span className="flex items-center  text-muted-foreground">
                <MapPin className="w-4 h-4 ml-1" /> {company.location}
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-xl font-bold ">{company.openPosition}</span>{' '}
            موقعیت شغلی فعال
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
