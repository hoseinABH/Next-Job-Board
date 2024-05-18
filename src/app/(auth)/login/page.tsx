import Link from 'next/link';
// Common components
import Logo from '@/components/logo';
// Local components
import LoginForm from '../_components/login-form';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ورود',
};

interface SearchParams {
  searchParams?: {
    redirectUrl?: string;
  };
}

export default async function LoginPage({ searchParams }: SearchParams) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8">
      <Logo className="mb-4" />
      <h1 className="text-2xl font-bold">ورود به حساب کاربری</h1>
      <p className="mt-2 text-center text-muted-foreground md:text-right">
        برای ورود به حساب کاربری ایمیل و رمزعبور خود را در زیر وارد کنید
      </p>
      <LoginForm redirectUrl={searchParams?.redirectUrl} />
      <Link href={Routes.REGISTER} className="mt-8 text-muted-foreground">
        حساب کاربری ندارید؟
      </Link>
    </div>
  );
}
