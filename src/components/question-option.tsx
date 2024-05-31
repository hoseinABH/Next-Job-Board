import { cn } from '@/lib/utils';
import { RadioGroupItem } from './ui/radio-group';
// Types
import { Label } from './ui/label';

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
        'flex w-full cursor-pointer items-center justify-between space-x-2 overflow-hidden rounded-md border border-r-4 px-6 py-4 transition-all hover:border-secondary',
        {
          ['border-r-secondary']: selectedOption === value,
        },
        className,
      )}
    >
      {title}
      <RadioGroupItem value={String(value)} id={title} />
    </Label>
  );
}
