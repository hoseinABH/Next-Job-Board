'use client';
import Image from 'next/image';
import Link from 'next/link';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
// Config
import * as configs from '@/config/app';
import * as Routes from '@/config/routes';

interface Props {
  className?: string;
  onClick?: () => void;
}
export default function Logo({ className, onClick }: Props) {
  const { theme } = useTheme();
  const imgSrc = useMemo(
    () => (theme === 'light' ? '/logo.webp' : '/logo-white.webp'),
    [theme]
  );
  return (
    <Link href={Routes.HOME}>
      <div
        className={cn(
          'group flex items-center w-fit text-nowrap gap-x-2',
          className
        )}
        onClick={onClick}
      >
        <Image
          priority
          src={imgSrc}
          width={100}
          height={60}
          alt={configs.appData.appName}
        />
      </div>
    </Link>
  );
}
