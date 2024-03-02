import Link from 'next/link';
// UI Frameworks
import { MapPin, Building2 } from 'lucide-react';
// Common components
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Job } from '@/types/jobs';

interface Props {
  job: Job;
  className?: string;
  href?: string;
  onBookmark?: () => void;
}

export default function JobCard({ className, job, href = '/' }: Props) {
  return (
    <Link href={href} className={cn('', className)}>
      <Card>
        <CardContent className="p-6 flex flex-col sm:flex-row  justify-center md:justify-between">
          <div className="flex flex-col md:flex-row items-center gap-x-4">
            <div className="flex flex-col items-center md:items-start gap-y-2">
              <h2 className="font-semibold text-lg  transition-all">
                {job.title}
              </h2>
              <div className="flex items-center flex-wrap sm:flex-wrap gap-2 text-muted-foreground mt-1">
                <p className="flex items-center">
                  <Building2 className="w-4 h-4 ml-1" /> {job.company.name}
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 ml-1" /> تهران
                </p>
              </div>
              <p className="text-muted-foreground flex items-baseline">
                حقوق {job.salary}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
