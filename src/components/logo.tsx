'use client';
import Image from 'next/image';
import Link from 'next/link';
// Utilities
import { cn } from '@/lib/utils';
// Config
import * as configs from '@/config/app';
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
  onClick?: () => void;
}
export default function Logo({ className, onClick }: Props) {
  return (
    <Link href={Routes.HOME}>
      <div className={cn('group flex w-fit items-center gap-x-2 text-nowrap', className)}>
        <Image
          onClick={onClick}
          priority
          src="/logo.png"
          width={40}
          height={40}
          alt={configs.appData.appName}
          className="h-auto w-auto"
        />
      </div>
    </Link>
  );
}
