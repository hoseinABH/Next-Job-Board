import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
// Types
import type { CompanyListItem } from '@/types/company';

interface Props {
  company: CompanyListItem;
  className?: string;
  href: string;
}

export default function TopCompanyCard({ href, company, className }: Props) {
  return (
    <Link href={href}>
      <div
        className={cn(
          'card-shadow flex aspect-square flex-col items-center justify-center gap-y-4 rounded-md',
          className,
        )}
      >
        <Image
          src={company.logo || '/companies/alibaba.webp'}
          className="rounded-sm drop-shadow-md"
          width={60}
          height={60}
          alt={company.title}
        />
        <div className="space-y-2 text-center">
          <h6> {company.title}</h6>
          <p className="text-xs text-primary">{company.positionCount} موقعیت شغلی</p>
        </div>
      </div>
    </Link>
  );
}
