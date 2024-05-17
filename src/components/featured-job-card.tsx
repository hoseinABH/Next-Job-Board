import Link from 'next/link';
// Common components
import { MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
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
      <Card className={cn('relative', className)}>
        <CardContent className="flex w-full flex-col items-center justify-center p-6">
          <span className="mt-4 text-sm">{position.title}</span>
          <p className="text-md  font-semibold">{position.companyProfile.title}</p>
          <p className="flex items-center text-muted-foreground">
            <MapPin className="ml-1 h-4 w-4" /> {position.companyProfile.city}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
