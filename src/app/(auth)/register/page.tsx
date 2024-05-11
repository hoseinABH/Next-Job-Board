import Link from 'next/link';
// Common components
import Logo from '@/components/logo';
// Local components
import RegisterForm from '../_components/register-form';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت‌نام',
};

export default function RegisterPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8">
      <Logo className="mb-4" />
      <h1 className="text-2xl font-bold">یک حساب کاربری بسازید</h1>
      <p className="mt-2 text-center text-muted-foreground md:text-right">
        برای ساخت حساب کاربری ایمیل و رمزعبور خود را در زیر وارد کنید
      </p>
      <RegisterForm />
      <Link href={Routes.LOGIN} className="mt-8 text-muted-foreground">
        حساب کاربری دارید؟
      </Link>
    </div>
  );
}
