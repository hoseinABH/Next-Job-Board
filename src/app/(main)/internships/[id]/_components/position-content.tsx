// Common components
import TestCard from '@/components/test-card';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';
// Types
import { Position, Test } from '@/types/internship';
// Constants
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
  position: Position;
  tests: Test[];
}

export default function PositionContent({ className, position, tests }: Props) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <h1 className="text-xl font-semibold">درباره موقعیت شغلی: </h1>
        <div className="py-4">
          <p className="leading-10">{position.description}</p>
        </div>
        <Separator className="mb-4" />
        <p className="text-muted-foreground">تست های مورد نیاز:</p>
        <div className="grid grid-cols-1 py-4 sm:grid-cols-2 md:grid-cols-4">
          {tests.map((test) => (
            <TestCard
              test={test}
              key={test.id}
              href={`${Routes.INTERNSHIPS}/${position.positionId}/${Routes.TEST}/${test.id}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
