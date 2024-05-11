// Common components
import Maybe from './maybe';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// Types
import type { Control, FieldValues, Path } from 'react-hook-form';
import type { Option } from './controlled-radio';

interface Props<TFieldValues extends FieldValues, TContext> {
  control: Control<TFieldValues, TContext>;
  name: Path<TFieldValues>;
  label?: string;
  options: Option[];
}
export default function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
>({ control, name, label, options }: Props<TFieldValues, TContext>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Maybe condition={!!label}>
            <FormLabel>{label}</FormLabel>
          </Maybe>
          <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={label} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
