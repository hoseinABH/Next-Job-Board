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
    <div className="pt-[15%] flex flex-col gap-y-6 justify-center items-center">
      <div className="flex item-center gap-x-2">
        <AlertTriangle className="text-destructive animate-pulse" />
        <h2 className="text-2xl font-bold">مشکلی پیش آمده است</h2>
        <AlertTriangle className="text-destructive animate-pulse" />
      </div>
      <BackButton onClick={redirectToHome}>صفحه اصلی</BackButton>
    </div>
  );
}
