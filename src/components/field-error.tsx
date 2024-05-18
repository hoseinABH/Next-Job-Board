import type { FormState } from '@/lib/error';
import Maybe from './maybe';

interface FieldErrorProps {
  formState?: FormState;
  name: string;
}
export default function FieldError({ formState, name }: FieldErrorProps) {
  return (
    <Maybe condition={Boolean(formState?.fieldErrors[name]?.[0])}>
      <p className="text-sm text-destructive">{formState?.fieldErrors[name]?.[0]}</p>
    </Maybe>
  );
}
