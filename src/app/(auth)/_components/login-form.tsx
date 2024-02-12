'use client';
import { zodResolver } from '@hookform/resolvers/zod';
// Common components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
// Utilities
import { z } from 'zod';
// Hooks
import { useForm } from 'react-hook-form';

const loginFormSchema = z.object({
  email: z.string().email({ message: 'ساختار ایمیل معتبر نیست' }),
  password: z.string().min(6, { message: 'رمزعبور حداقل باید 6 کارکتر باشد' }),
});
type FormData = typeof loginFormSchema;
export default function LoginForm() {
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(values: z.infer<FormData>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 max-w-sm w-full space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  dir="ltr"
                  placeholder="ایمیل"
                  className="placeholder:text-right"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  dir="ltr"
                  placeholder="رمز عبور"
                  className="placeholder:text-right"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-4">ورود به حساب کاربری</Button>
      </form>
    </Form>
  );
}
