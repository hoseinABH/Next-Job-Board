'use client';
import SubmitButton from '@/components/submit-button';
// Common components
import { Input } from '@/components/ui/input';

export default function RegisterForm() {
  return (
    <form className="mt-8 w-full max-w-sm space-y-8">
      <Input type="email" dir="ltr" placeholder="ایمیل" className="placeholder:text-right" />
      <Input
        dir="ltr"
        autoComplete="username"
        placeholder="نام کاربری"
        className="placeholder:text-right"
      />
      <Input
        type="password"
        dir="ltr"
        autoComplete="current-password"
        placeholder="رمز عبور"
        className="placeholder:text-right"
      />
      <Input placeholder="نام" />
      <Input placeholder="نام خانوادگی" />
      <SubmitButton className="mt-4 w-full">ثبت نام</SubmitButton>
    </form>
  );
}
