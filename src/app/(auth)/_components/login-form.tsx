'use client';
import { zodResolver } from '@hookform/resolvers/zod';
// Common components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
// Utilities
import { z } from 'zod';
// Actions
import AuthActions from '@/store/Auth/auth.actions';
// Hooks
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: 'نام کاربری را وارد کنید' }),
  password: z.string().min(6, { message: 'رمزعبور حداقل باید 6 کارکتر باشد' }),
});
type FormData = typeof loginFormSchema;
export default function LoginForm() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  function onSubmit(values: z.infer<FormData>) {
    dispatch(AuthActions.login(values));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full max-w-sm space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  dir="ltr"
                  autoComplete="username"
                  placeholder="نام کاربری"
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
                  autoComplete="current-password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full" loading={loading.login}>
          ورود به حساب کاربری
        </Button>
      </form>
    </Form>
  );
}
