'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
// Actions
import AuthActions from '@/store/Auth/auth.actions';
// Hooks
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

const registerFormSchema = z.object({
  email: z.string().email({ message: 'ساختار ایمیل معتبر نیست' }),
  password: z.string().min(6, { message: 'رمزعبور حداقل باید 6 کاراکتر باشد' }),
  firstName: z.string().min(1, { message: 'نام را وارد کنید' }),
  lastName: z.string().min(1, { message: 'نام خانوادگی را وارد کنید' }),
});
type FormData = typeof registerFormSchema;
export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((state) => state.auth);
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });
  function onSubmit(values: z.infer<FormData>) {
    dispatch(AuthActions.register(values));
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
                  type="email"
                  dir="ltr"
                  autoComplete="username"
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
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="نام" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="نام خانوادگی" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-4" loading={loading.login}>
          ثبت نام
        </Button>
      </form>
    </Form>
  );
}
