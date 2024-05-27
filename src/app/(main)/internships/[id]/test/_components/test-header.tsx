import { cn } from '@/lib/utils';
import { FileQuestion } from 'lucide-react';
interface Props {
  className?: string;
  questionCount: number;
  testTitle: string;
}
export default function TestHeader({ className, questionCount, testTitle }: Props) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <h1 className="text-lg font-medium">{testTitle}</h1>
      <div className="flex items-center gap-x-2">
        <div className="flex items-center justify-center rounded-full bg-primary/25 p-2 text-primary/70">
          <FileQuestion className="h-6 w-6" />
        </div>
        <p className="text-muted-foreground">تعداد سوالات: {questionCount}</p>
      </div>
    </div>
  );
}
