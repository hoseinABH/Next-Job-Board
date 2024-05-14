import Link from 'next/link';
// UI Frameworks
import { MapPin, Building2 } from 'lucide-react';
// Common components
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Position } from '@/types/internship';

interface Props {
  position: Position;
  className?: string;
  href?: string;
  onBookmark?: () => void;
}

export default function JobCard({ className, position, href = '/' }: Props) {
  return (
    <Link href={href} className={cn('', className)}>
      <Card>
        <CardContent className="flex flex-col justify-center p-6  sm:flex-row md:justify-between">
          {/* <div className="flex flex-col items-center gap-x-4 md:flex-row">
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <h2 className="text-lg font-semibold  transition-all">{position.title}</h2>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-muted-foreground sm:flex-wrap">
                <p className="flex items-center">
                  <Building2 className="ml-1 h-4 w-4" /> {position.company.name}
                </p>
                <p className="flex items-center">
                  <MapPin className="ml-1 h-4 w-4" /> {position.company.city}
                </p>
              </div>
              <p className="flex items-baseline text-muted-foreground">حقوق {position.salary}</p>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </Link>
  );
}
