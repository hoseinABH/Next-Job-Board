'use client';
// Common components
import { Card, CardContent } from '@/components/ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import { Job } from '@/types/jobs';

interface Props {
  className?: string;
  job: Job;
}

export default function PositionContent({ className, job }: Props) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <div className="space-y-10">
          {job.content.map((section) => (
            <div key={section.id}>
              <h6 className="text-lg sm:text-xl font-medium mb-4">
                {section.title}
              </h6>
              <ul className="space-y-2 list-disc  mr-4 sm:mr-12">
                {section.items.map((item) => (
                  <li key={item} className="text-md sm:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
