// Common components
import Maybe from './maybe';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input, InputProps } from './ui/input';
import { Textarea } from './ui/textarea';
// Types
import type { Control, FieldValues, Path } from 'react-hook-form';

interface Props<TFieldProps, TFieldValues extends FieldValues, TContext> {
  inputProps?: TFieldProps;
  control: Control<TFieldValues, TContext>;
  name: Path<TFieldValues>;
  label?: string;
  className?: string;
  isTextArea?: boolean;
}

export default function ControlledInput<
  TFieldProps = InputProps,
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>({
  inputProps,
  control,
  name,
  label,
  className,
  isTextArea = false,
}: Props<TFieldProps, TFieldValues, TContext>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <Maybe condition={!!label}>
            <FormLabel>{label}</FormLabel>
          </Maybe>
          <FormControl>
            {!isTextArea ? (
              <Input {...inputProps} {...field} />
            ) : (
              <Textarea {...inputProps} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
