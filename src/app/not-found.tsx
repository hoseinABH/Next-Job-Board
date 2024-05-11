'use client';
import { AlertTriangle } from 'lucide-react';
import BackButton from '@/components/back-button';

export default function RootNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-6">
      <div className="item-center flex gap-x-2">
        <AlertTriangle className="animate-pulse text-destructive" />
        <h2 className="text-2xl font-bold">صفحه مورد نظر شما یافت نشد</h2>
        <AlertTriangle className="animate-pulse text-destructive" />
      </div>
      <BackButton>بازگشت</BackButton>
    </div>
  );
}
