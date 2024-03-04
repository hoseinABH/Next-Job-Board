import Link from 'next/link';
import dynamic from 'next/dynamic';
// Local components
import LoginForm from '../_components/login-form';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Metadata } from 'next';

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const Logo = dynamic(() => import('@/components/logo'), { ssr: false });

export const metadata: Metadata = {
  title: 'ورود',
};

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4">
      <Logo className="mb-4" />
      <h1 className="font-bold text-2xl">ورود به حساب کاربری</h1>
      <p className="text-muted-foreground mt-2 text-center md:text-right">
        برای ورود به حساب کاربری ایمیل و رمزعبور خود را در زیر وارد کنید
      </p>
      <LoginForm />
      <Link href={Routes.REGISTER} className="mt-8 text-muted-foreground">
        حساب کاربری ندارید؟
      </Link>
    </div>
  );
}
