'use client';
import { AlertTriangle } from 'lucide-react';
import BackButton from '@/components/back-button';

export default function RootNotFound() {
  return (
    <div className="h-screen flex flex-col gap-y-6 justify-center items-center">
      <div className="flex item-center gap-x-2">
        <AlertTriangle className="text-destructive animate-pulse" />
        <h2 className="text-2xl font-bold">صفحه مورد نظر شما یافت نشد</h2>
        <AlertTriangle className="text-destructive animate-pulse" />
      </div>
      <BackButton>بازگشت</BackButton>
    </div>
  );
}
