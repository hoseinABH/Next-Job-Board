// Common components
import FieldError from './field-error';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// Utilities
import { cn } from '@/lib/utils';
// types
import type { SelectProps } from '@radix-ui/react-select';
import type { FormState } from '@/lib/error';

export interface SelectOption {
  title: string;
  value: string | number;
}
interface SelectFieldProps extends SelectProps {
  name: string;
  formState?: FormState;
  label?: string;
  placeholder?: string;
  className?: string;
  options: SelectOption[];
}

export default function SelectField({
  name,
  label,
  options,
  formState,
  className,
  placeholder = 'انتخاب کنید',
  ...props
}: SelectFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Select name={name} {...props}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={String(option.value)}>
              {option.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError formState={formState} name={name} />
    </div>
  );
}
