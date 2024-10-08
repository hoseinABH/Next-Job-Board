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
    <Link href={Routes.HOME} className={cn('', className)}>
      <Image
        onClick={onClick}
        priority
        src="/logo.png"
        width={60}
        height={60}
        alt={configs.appData.appName}
      />
    </Link>
  );
}
