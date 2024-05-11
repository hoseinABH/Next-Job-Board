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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
// Actions
import AuthActions from '@/store/Auth/auth.actions';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { useRouter } from 'next/navigation';
// Configs
import * as Routes from '@/config/routes';

const userMenuItems = [
  {
    title: 'درخواست های من',
    key: 'ApplicationRequest',
  },
  {
    title: 'حساب کاربری',
    key: 'Account',
  },
  {
    title: 'رزومه من',
    key: 'Resume',
  },
  {
    title: 'خروج',
    key: 'Logout',
  },
];

export default function UserDropDown() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((state) => state.auth);


  function handleSelectMenu(menuKey: string) {
    switch (menuKey) {
      case 'Resume':
        router.push(Routes.CV_MAKER);
        break;
      case 'Logout':
        dispatch(AuthActions.logout());
        break;
      default:
        break;
    }
  }

  return (
    <>
      {loading.fetchMe ? (
        <Spinner />
      ) : (
        <>
          {/* <Maybe condition={Boolean(loggedInUserInfo)}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-x-2 outline-none">
                <Avatar>
                  <AvatarImage src="/" alt={fullName} />
                  <AvatarFallback>{fullName[0]}</AvatarFallback>
                </Avatar>
                {fullName}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {userMenuItems.map((menu) => (
                  <DropdownMenuItem
                    key={menu.key}
                    onClick={() => handleSelectMenu(menu.key)}
                    className="cursor-pointer"
                  >
                    {menu.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Maybe> */}
          {/* <Maybe condition={!Boolean(loggedInUserInfo)}> */}
            <Link href={Routes.LOGIN} className={buttonVariants()}>
              <Fingerprint className="ml-2 w-4 h-4" />
              <span>ورود | ثبت نام</span>
            </Link>
          {/* </Maybe> */}
        </>
      )}
    </>
  );
}
