// Common components
import FieldError from './field-error';
import { Input, InputProps } from './ui/input';
import { Label } from './ui/label';
// Utilities
import { cn } from '@/lib/utils';
// types
import type { FormState } from '@/lib/error';
import type { ChangeEvent } from 'react';

interface InputFieldProps extends InputProps {
  name: string;
  formState?: FormState;
  label?: string;
  containerClassName?: string;
}
const reg = /^\d+$/;
export default function InputField({
  name,
  label,
  formState,
  onChange,
  containerClassName,
  inputMode,
  ...props
}: InputFieldProps) {
  const isNumeric = inputMode === 'numeric' || inputMode === 'tel';
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (isNumeric && !reg.test(event.target.value)) {
      event.target.value = event.target.value.replace(/\D/, '');
    }
    onChange?.(event);
  }
  return (
    <div className={cn('space-y-2', containerClassName)}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input name={name} onChange={handleChange} {...props} />
      <FieldError formState={formState} name={name} />
    </div>
  );
}
