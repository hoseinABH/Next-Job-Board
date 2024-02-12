'use client';
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

export default function UserDropDown() {
  const { isLoggedIn, loggedInUserInfo } = useAppSelector(
    (state) => state.user
  );
  return (
    <>
      <Maybe condition={isLoggedIn}>
        <Avatar>
          <AvatarImage
            src="https://github.com/shsadcn.png"
            alt={loggedInUserInfo?.firstName}
          />
          <AvatarFallback>
            {loggedInUserInfo?.firstName.substring(0, 2)}
          </AvatarFallback>
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
