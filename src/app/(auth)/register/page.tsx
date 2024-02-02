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
  title: 'ورود',
};

export default function RegisterPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4">
      <Logo className="mb-4" />
      <h1 className="font-bold text-2xl">یک حساب کاربری بسازید</h1>
      <p className="text-muted-foreground mt-2 text-center md:text-right">
        برای ساخت حساب کاربری ایمیل و رمزعبور خود را در زیر وارد کنید
      </p>
      <RegisterForm />
      <Link href={Routes.LOGIN} className="mt-8 text-muted-foreground">
        حساب کاربری دارید؟
      </Link>
    </div>
  );
}
