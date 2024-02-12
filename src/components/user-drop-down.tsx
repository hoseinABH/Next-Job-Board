'use client';
import { useMemo } from 'react';
import Link from 'next/link';
// UI frameworks
import { Fingerprint } from 'lucide-react';
// Common components
import Maybe from './maybe';
import { buttonVariants } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// Hooks
import { useAppSelector } from '@/hooks/store';
// Configs
import * as Routes from '@/config/routes';

function giveFirstChar(str: string | undefined) {
  if (!str) return '';
  return str.substring(0, 1).toUpperCase();
}

export default function UserDropDown() {
  const { isLoggedIn, loggedInUserInfo } = useAppSelector(
    (state) => state.user
  );
  const briefName = useMemo(() => {
    const left = giveFirstChar(loggedInUserInfo?.firstName);
    const right = giveFirstChar(loggedInUserInfo?.lastName);
    return left.concat(right);
  }, [loggedInUserInfo?.lastName, loggedInUserInfo?.firstName]);
  return (
    <>
      <Maybe condition={isLoggedIn}>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt={loggedInUserInfo?.firstName}
          />
          <AvatarFallback>{briefName}</AvatarFallback>
        </Avatar>
      </Maybe>
      <Maybe condition={!isLoggedIn}>
        <Link href={Routes.LOGIN} className={buttonVariants()}>
          <Fingerprint className="ml-2 w-4 h-4" />
          <span>ورود | ثبت نام</span>
        </Link>
      </Maybe>
    </>
  );
}
