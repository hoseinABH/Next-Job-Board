import Link from 'next/link';
import Image from 'next/image';
// Common components
import { MapPin, Calendar } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { PositionItem } from '@/types/internship';

interface Props {
  position: PositionItem;
  className?: string;
  href: string;
}

export default function FeaturedJobCard({ className, position, href }: Props) {
  return (
    <Link href={href}>
      <div className={cn('card-shadow space-y-4 rounded-md p-4 ', className)}>
        <div className="flex items-center gap-x-4">
          <Image
            // src={company.logo}
            src="/companies/digikala.webp"
            className="rounded-sm drop-shadow-md"
            width={60}
            height={60}
            alt={position.title}
          />
          <h2 className="font-bold text-secondary">{position.title}</h2>
        </div>
        <div className="space-y-1">
          <p className="text-secondary">{position.companyProfile.title}</p>
          <span className="flex items-center gap-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {position.companyProfile.city}
          </span>
          <span className="flex items-center gap-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {position.companyProfile.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
