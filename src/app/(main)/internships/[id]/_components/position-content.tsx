// Common components
import { Card, CardContent } from '@/components/ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Types
import { Position } from '@/types/internship';

interface Props {
  className?: string;
  position: Position;
}

export default function PositionContent({ className, position }: Props) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <h1 className="text-xl font-semibold">درباره موقعیت شغلی: </h1>
        <br />
        <p className="leading-10">{position.description}</p>
      </CardContent>
    </Card>
  );
}
