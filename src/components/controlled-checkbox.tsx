// Common components
import Maybe from './maybe';
import { Checkbox } from './ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
// Types
import type { Control, FieldValues, Path } from 'react-hook-form';

interface Props<TFieldValues extends FieldValues, TContext> {
  control: Control<TFieldValues, TContext>;
  name: Path<TFieldValues>;
  label?: string;
  className?: string;
}

export default function ControlledCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>({ control, name, label, className }: Props<TFieldValues, TContext>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <FormItem className="flex items-center gap-x-2">
              <Checkbox
                id={label}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <Maybe condition={!!label}>
                <FormLabel htmlFor={label}>{label}</FormLabel>
              </Maybe>
            </FormItem>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
