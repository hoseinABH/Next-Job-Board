import { cn } from '@/lib/utils';
// Types
import { Label } from './ui/label';
import { RadioGroupItem } from './ui/radio-group';

interface Props {
  className?: string;
  value: string;
  title: string;
  selectedOption: string;
}

export default function QuestionOption({ className, value, title, selectedOption }: Props) {
  return (
    <Label
      htmlFor={title}
      className={cn(
        'flex w-full cursor-pointer items-center justify-between space-x-2 overflow-hidden rounded-md border border-r-4 px-6 py-4 transition-all hover:border-purple-600',
        {
          ['border-r-purple-700']: selectedOption === value,
        },
        className,
      )}
    >
      {title}
      <RadioGroupItem value={String(value)} id={title} />
    </Label>
  );
}
