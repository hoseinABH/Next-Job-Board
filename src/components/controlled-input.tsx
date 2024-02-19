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
// Types
import type { Control, FieldValues, Path } from 'react-hook-form';

interface Props<TFieldValues extends FieldValues, TContext> {
  control: Control<TFieldValues, TContext>;
  name: Path<TFieldValues>;
  label?: string;
  inputProps?: InputProps;
}
export default function ControlledInput<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>({ control, name, label, inputProps }: Props<TFieldValues, TContext>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Maybe condition={!!label}>
            <FormLabel>{label}</FormLabel>
          </Maybe>
          <FormControl>
            <Input {...inputProps} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
