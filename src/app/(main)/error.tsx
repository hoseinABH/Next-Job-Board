'use client';
import { AlertTriangle } from 'lucide-react';
import BackButton from '@/components/back-button';
// Hooks
import { useRouter } from 'next/navigation';
// Configs
import * as Routes from '@/config/routes';

export default function RootError() {
  const router = useRouter();
  function redirectToHome() {
    router.push(Routes.HOME);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 pt-[15%]">
      <div className="item-center flex gap-x-2">
        <AlertTriangle className="animate-pulse text-destructive" />
        <h2 className="text-2xl font-bold">مشکلی پیش آمده است</h2>
        <AlertTriangle className="animate-pulse text-destructive" />
      </div>
      <BackButton onClick={redirectToHome}>صفحه اصلی</BackButton>
    </div>
  );
}
