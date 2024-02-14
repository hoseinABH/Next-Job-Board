'use client';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
// UI frameworks
import { Fingerprint } from 'lucide-react';
// Common components
import Maybe from './maybe';
import Spinner from './spinner';
import { buttonVariants } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// Actions
import AuthActions from '@/store/Auth/auth.actions';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Configs
import * as Routes from '@/config/routes';

function giveFirstChar(str: string | undefined) {
  if (!str) return '';
  return str.substring(0, 1).toUpperCase();
}

export default function UserDropDown() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, loggedInUserInfo } = useAppSelector(
    (state) => state.user
  );
  const { loading } = useAppSelector((state) => state.auth);
  const briefName = useMemo(() => {
    const left = giveFirstChar(loggedInUserInfo?.firstName);
    const right = giveFirstChar(loggedInUserInfo?.lastName);
    return left.concat(right);
  }, [loggedInUserInfo?.lastName, loggedInUserInfo?.firstName]);

  useEffect(() => {
    if (isLoggedIn && !loggedInUserInfo) {
      dispatch(AuthActions.fetchMe());
    }
  }, []);
  return (
    <>
      {loading.fetchMe ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}
