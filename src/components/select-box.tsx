// Common components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Utilities
import { cn } from '@/lib/utils';

type OptionValue = string;

export interface Option {
  value: OptionValue;
  title: string;
}
export interface Props {
  placeholder: string;
  options: Option[];
  className?: string;
  value?: OptionValue;
  onChange?: (input: OptionValue) => void;
}

export default function SelectBox({ options, placeholder, className, value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn('flex w-full sm:w-36', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={`${option.title}_${option.value}`} value={option.value}>
            {option.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
