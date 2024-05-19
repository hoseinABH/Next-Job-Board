// Common components
import FieldError from './field-error';
import { Input, InputProps } from './ui/input';
import { Label } from './ui/label';
// types
import type { FormState } from '@/lib/error';
import { cn } from '@/lib/utils';

interface InputFieldProps extends InputProps {
  name: string;
  formState?: FormState;
  label?: string;
  className?: string;
}

export default function InputField({
  name,
  label,
  formState,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input {...props} />
      <FieldError formState={formState} name={name} />
    </div>
  );
}
