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
      <div
        className={cn(
          'group flex items-center w-fit text-nowrap gap-x-2',
          className
        )}
        onClick={onClick}
      >
        <Image
          priority
          src="/github.webp"
          width={40}
          height={40}
          alt={configs.appData.appName}
        />
        <span className="font-bold inline-block">
          {configs.appData.appName}
        </span>
      </div>
    </Link>
  );
}
