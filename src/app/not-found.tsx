'use client';
import { AlertTriangle } from 'lucide-react';
import BackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Constants
import * as Routes from '@/config/routes';

export default function RootNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-6">
      <div className="item-center flex gap-x-2">
        <AlertTriangle className="animate-pulse text-destructive" />
        <h2 className="text-2xl font-bold">صفحه مورد نظر شما یافت نشد</h2>
        <AlertTriangle className="animate-pulse text-destructive" />
      </div>
      <BackButton>بازگشت</BackButton>
      <Link href={Routes.HOME}>
        <Button className="rounded-full" variant="secondary" size="lg">
          خانه
        </Button>
      </Link>
    </div>
  );
}
