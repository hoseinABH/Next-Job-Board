// Common components
import Maybe from './maybe';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
// Types
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface Option {
  value: string;
  title: string;
}

interface Props<TFieldValues extends FieldValues, TContext> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues, TContext>;
  options: Option[];
  label?: string;
}
export default function ControlledRadio<
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
          <FormControl>
            <RadioGroup defaultValue={field.value} onValueChange={field.onChange} className="flex">
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel>{option.title}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
