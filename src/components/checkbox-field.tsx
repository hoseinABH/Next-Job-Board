// Common components
import FieldError from './field-error';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
// Utilities
import { cn } from '@/lib/utils';
// types
import type { FormState } from '@/lib/error';
import type { CheckboxProps } from '@radix-ui/react-checkbox';

interface CheckboxFieldProps extends CheckboxProps {
  name: string;
  formState?: FormState;
  label?: string;
  containerClassName?: string;
}

export default function CheckboxField({
  name,
  label,
  formState,
  containerClassName,
  ...props
}: CheckboxFieldProps) {
  return (
    <div className={cn('space-y-2', containerClassName)}>
      <div className="flex items-center gap-x-2">
        <Checkbox id={name} name={name} {...props} />
        {label ? <Label htmlFor={name}>{label}</Label> : null}
      </div>
      <FieldError formState={formState} name={name} />
    </div>
  );
}
