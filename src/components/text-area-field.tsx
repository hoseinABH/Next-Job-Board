// Common components
import FieldError from './field-error';
import { Label } from './ui/label';
import { Textarea, TextareaProps } from './ui/textarea';
// Utilities
import { cn } from '@/lib/utils';
// types
import type { FormState } from '@/lib/error';

interface TextAreaFieldProps extends TextareaProps {
  name: string;
  formState?: FormState;
  label?: string;
  containerClassName?: string;
}

export default function TextAreaField({
  name,
  label,
  formState,
  containerClassName,
  ...props
}: TextAreaFieldProps) {
  return (
    <div className={cn('space-y-2', containerClassName)}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Textarea name={name} {...props} />
      <FieldError formState={formState} name={name} />
    </div>
  );
}
